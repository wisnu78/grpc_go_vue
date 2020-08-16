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
proto.grpc_go_vue = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_go_vue.EchoServiceClient =
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
proto.grpc_go_vue.EchoServicePromiseClient =
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
 *   !proto.grpc_go_vue.EchoRequest,
 *   !proto.grpc_go_vue.EchoResponse>}
 */
const methodDescriptor_EchoService_Echo = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.EchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.grpc_go_vue.EchoRequest,
  proto.grpc_go_vue.EchoResponse,
  /**
   * @param {!proto.grpc_go_vue.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.EchoRequest,
 *   !proto.grpc_go_vue.EchoResponse>}
 */
const methodInfo_EchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.EchoResponse,
  /**
   * @param {!proto.grpc_go_vue.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_go_vue.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_go_vue.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo,
      callback);
};


/**
 * @param {!proto.grpc_go_vue.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_go_vue.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc_go_vue.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_go_vue.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_go_vue.EchoRequest,
 *   !proto.grpc_go_vue.EchoResponse>}
 */
const methodDescriptor_EchoService_EchoAbort = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.EchoService/EchoAbort',
  grpc.web.MethodType.UNARY,
  proto.grpc_go_vue.EchoRequest,
  proto.grpc_go_vue.EchoResponse,
  /**
   * @param {!proto.grpc_go_vue.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.EchoRequest,
 *   !proto.grpc_go_vue.EchoResponse>}
 */
const methodInfo_EchoService_EchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.EchoResponse,
  /**
   * @param {!proto.grpc_go_vue.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_go_vue.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServiceClient.prototype.echoAbort =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_go_vue.EchoService/EchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoAbort,
      callback);
};


/**
 * @param {!proto.grpc_go_vue.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_go_vue.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc_go_vue.EchoServicePromiseClient.prototype.echoAbort =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_go_vue.EchoService/EchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoAbort);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_go_vue.Empty,
 *   !proto.grpc_go_vue.Empty>}
 */
const methodDescriptor_EchoService_NoOp = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.EchoService/NoOp',
  grpc.web.MethodType.UNARY,
  proto.grpc_go_vue.Empty,
  proto.grpc_go_vue.Empty,
  /**
   * @param {!proto.grpc_go_vue.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.Empty,
 *   !proto.grpc_go_vue.Empty>}
 */
const methodInfo_EchoService_NoOp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.Empty,
  /**
   * @param {!proto.grpc_go_vue.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.Empty.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc_go_vue.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServiceClient.prototype.noOp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_go_vue.EchoService/NoOp',
      request,
      metadata || {},
      methodDescriptor_EchoService_NoOp,
      callback);
};


/**
 * @param {!proto.grpc_go_vue.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_go_vue.Empty>}
 *     A native promise that resolves to the response
 */
proto.grpc_go_vue.EchoServicePromiseClient.prototype.noOp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_go_vue.EchoService/NoOp',
      request,
      metadata || {},
      methodDescriptor_EchoService_NoOp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_go_vue.ServerStreamingEchoRequest,
 *   !proto.grpc_go_vue.ServerStreamingEchoResponse>}
 */
const methodDescriptor_EchoService_ServerStreamingEcho = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.EchoService/ServerStreamingEcho',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.grpc_go_vue.ServerStreamingEchoRequest,
  proto.grpc_go_vue.ServerStreamingEchoResponse,
  /**
   * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.ServerStreamingEchoRequest,
 *   !proto.grpc_go_vue.ServerStreamingEchoResponse>}
 */
const methodInfo_EchoService_ServerStreamingEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.ServerStreamingEchoResponse,
  /**
   * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServiceClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc_go_vue.EchoService/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEcho);
};


/**
 * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServicePromiseClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc_go_vue.EchoService/ServerStreamingEcho',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEcho);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_go_vue.ServerStreamingEchoRequest,
 *   !proto.grpc_go_vue.ServerStreamingEchoResponse>}
 */
const methodDescriptor_EchoService_ServerStreamingEchoAbort = new grpc.web.MethodDescriptor(
  '/grpc_go_vue.EchoService/ServerStreamingEchoAbort',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.grpc_go_vue.ServerStreamingEchoRequest,
  proto.grpc_go_vue.ServerStreamingEchoResponse,
  /**
   * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.grpc_go_vue.ServerStreamingEchoRequest,
 *   !proto.grpc_go_vue.ServerStreamingEchoResponse>}
 */
const methodInfo_EchoService_ServerStreamingEchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc_go_vue.ServerStreamingEchoResponse,
  /**
   * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_go_vue.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServiceClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc_go_vue.EchoService/ServerStreamingEchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEchoAbort);
};


/**
 * @param {!proto.grpc_go_vue.ServerStreamingEchoRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_go_vue.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.grpc_go_vue.EchoServicePromiseClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/grpc_go_vue.EchoService/ServerStreamingEchoAbort',
      request,
      metadata || {},
      methodDescriptor_EchoService_ServerStreamingEchoAbort);
};


module.exports = proto.grpc_go_vue;

