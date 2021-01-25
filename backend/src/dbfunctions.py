import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal

class counterdb:

    def __init__(self,colname,idname):
        self.colname=colname
        self.dynamodbclient=boto3.resource('dynamodb')
        self.idname=idname

    def querydb(self,qrystr):
        table = self.dynamodbclient.Table('visitors')
        response = table.get_item(
            TableName='visitors',
            Key={
                self.colname: qrystr
            }
        )
        return response


    def processcounter(self):
        dataresp=self.querydb(self.idname)
        newcount=int(dataresp['Item']['visitorcount']['N'])+1
        return newcount

    def updatetable(self):
        table = self.dynamodbclient.Table('visitors')
        response = table.update_item(
             Key={

                 self.colname: self.idname
             },
             UpdateExpression="set visitorcount = visitorcount + :val",
             ExpressionAttributeValues={
                 ':val': Decimal(1)
             },
             ReturnValues="UPDATED_NEW"
         )
        newcountval=int(response['Attributes']['visitorcount'])
        return {'newcount':newcountval}

    def getcountervalue(self):
        countresp=self.querydb('visitorcount')
        return int(countresp['Item']['visitorcount'])

    def addinitialrow(self):
        table = self.dynamodbclient.Table('visitors')
        table.put_item(
           Item={
            self.colname: self.idname,
            self.idname: 0
            }
        )
        return {'status':'success'}
