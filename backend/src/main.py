from flask import Flask, render_template, request,jsonify,make_response
from flask_cors import CORS
import os
from dbfunctions import counterdb
import awsgi

app= Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def index():
	return 'working'

@app.route('/mainpage')
def mainindex():
	return 'working_fine'

@app.route('/updatecount',methods=['POST'])
def updatecounter():
    try:
        inputdata = request.get_json()
        if inputdata['action']=='update':
            counterobj= counterdb('visitorid','visitorcount')
            countresp=counterobj.updatetable()
            resp=make_response(jsonify(countresp),200)
        else:
            resp=make_response(jsonify(status='error'),500)
    except Exception as e:
        resp = make_response(jsonify(status='error'), 500)
    return resp

@app.route('/getcurrentcount')
def getcounterval():
    try:
        # raise Exception('error1')
        counterobj = counterdb('visitorid', 'visitorcount')
        cntrval=counterobj.getcountervalue()
        resp=make_response(jsonify(countval=cntrval),200)
    except Exception as e:
        resp = make_response(jsonify(status='error'), 500)
    return resp

@app.route('/addinitialrow',methods=['POST'])
def addinitialrow():
    try:
        inputdata = request.get_json()
        counterobj = counterdb('visitorid', 'visitorcount')
        if inputdata['action']=='insert':
            insrtresp=counterobj.addinitialrow()
            resp=make_response(jsonify(insrtresp),200)
        else:
            resp=make_response(jsonify(status='error'),500)
    except Exception as e:
        resp = make_response(jsonify(status='error'), 500)
    return resp



def lambda_handler(event, context):
    return awsgi.response(app,event,context)