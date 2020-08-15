/**
 * @fileoverview gRPC-Web generated client stub for grpc_go_vue
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpc_go_vue = require('./greet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_go_vue.GreetServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_go_vue.GreetServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_go_vue.GreetRequest,
 *   !proto.grpc_go_vue.GreetResponse>}
 */
const methodDescriptor_GreetService_Greet = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.GreetService/Greet',
  grpc.web.MethodType.UNARY,
  proto.grpc_go_vue.GreetRequest,
  proto.grpc_go_vue.GreetResponse,
  /**
   * @param {!proto.grpc_go_vue.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.GreetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.GreetRequest,
 *   !proto.grpc_go_vue.GreetResponse>}
 */
const methodInfo_GreetService_Greet = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.GreetResponse,
  /**
   * @param {!proto.grpc_go_vue.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.GreetResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_go_vue.GreetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.GreetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.GreetServiceClient.prototype.greet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_go_vue.GreetService/Greet',
      request,
      metadata || {},
      methodDescriptor_GreetService_Greet,
      callback);
};


/**
 * @param {!proto.grpc_go_vue.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_go_vue.GreetResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc_go_vue.GreetServicePromiseClient.prototype.greet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_go_vue.GreetService/Greet',
      request,
      metadata || {},
      methodDescriptor_GreetService_Greet);
};


module.exports = proto.grpc_go_vue;

