{
  "swagger": "2.0",
  "info": {
    "description": "API for managing VPN zones and sessions",
    "title": "VPN-as-a-Service API",
    "version": "1.0"
  },
  "host": "api.pingnetwork.io",
  "basePath": "/customer/v1",
  "schemes": [
    "https"
  ],
  "produces": [
    "application/json"
  ],
  "consumes": [
    "application/json"
  ],
  "paths": {
    "/zones": {
      "get": {
        "produces": [
          "application/json"
        ],
        "tags": [
          "Zones"
        ],
        "summary": "List available network zones",
        "description": "Returns a list of all available network zones",
        "parameters": [
          {
            "type": "boolean",
            "description": "Include active node count for each zone",
            "name": "include",
            "in": "query",
            "enum": [
              "node_count"
            ]
          }
        ],
        "responses": {
          "200": {
            "description": "List of zones retrieved successfully",
            "schema": {
              "$ref": "#/definitions/zones.ZoneResponse"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/sessions": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          "Sessions"
        ],
        "summary": "Create a new session",
        "description": "Creates a new session in the specified zone with the requested connection type",
        "parameters": [
          {
            "description": "Session creation request",
            "name": "request",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/sessions.CreateSessionRequest"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Session created successfully",
            "schema": {
              "$ref": "#/definitions/sessions.SessionResponse"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Zone not found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "422": {
            "description": "Unprocessable Entity",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/sessions/events": {
      "get": {
        "produces": [
          "text/event-stream"
        ],
        "tags": [
          "Sessions"
        ],
        "summary": "Stream session events",
        "description": "Provides a Server-Sent Events stream of session activity events",
        "responses": {
          "200": {
            "description": "SSE stream established successfully",
            "schema": {
              "$ref": "#/definitions/sessions.SessionEvent"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/sessions/{id}/status": {
      "get": {
        "produces": [
          "application/json"
        ],
        "tags": [
          "Sessions"
        ],
        "summary": "Get session status",
        "description": "Retrieves the current status of a specific session by ID",
        "parameters": [
          {
            "type": "string",
            "description": "Session ID",
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Session status retrieved successfully",
            "schema": {
              "$ref": "#/definitions/sessions.SessionStatus"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Session not found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/customer/limits/global": {
      "get": {
        "summary": "Retrieve global limits for all customer's clients",
        "operationId": "getGlobalLimits",
        "tags": [
          "Global Limits"
        ],
        "responses": {
          "200": {
            "description": "Global limits retrieved successfully",
            "schema": {
              "$ref": "#/definitions/limits.GlobalLimits"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "patch": {
        "summary": "Update existing global limits",
        "operationId": "updateGlobalLimits",
        "tags": [
          "Global Limits"
        ],
        "parameters": [
          {
            "description": "Global limits update request",
            "name": "request",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/limits.GlobalLimitsRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Global limits updated successfully",
            "schema": {
              "$ref": "#/definitions/limits.GlobalLimits"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "delete": {
        "summary": "Delete global limits",
        "operationId": "deleteGlobalLimits",
        "tags": [
          "Global Limits"
        ],
        "responses": {
          "204": {
            "description": "Global limits deleted successfully"
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/customer/limits/client": {
      "get": {
        "summary": "Retrieve limits that apply to each client individually",
        "operationId": "getClientLimits",
        "tags": [
          "Client Limits"
        ],
        "responses": {
          "200": {
            "description": "Client limits retrieved successfully",
            "schema": {
              "$ref": "#/definitions/limits.ClientLimits"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "patch": {
        "summary": "Update limits that apply to each client individually",
        "operationId": "updateClientLimits",
        "tags": [
          "Client Limits"
        ],
        "parameters": [
          {
            "description": "Client limits update request",
            "name": "request",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/limits.ClientLimitsRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Client limits updated successfully",
            "schema": {
              "$ref": "#/definitions/limits.ClientLimits"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "delete": {
        "summary": "Delete limits that apply to each client individually",
        "operationId": "deleteClientLimits",
        "tags": [
          "Client Limits"
        ],
        "responses": {
          "204": {
            "description": "Client limits deleted successfully"
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    },
    "/customer/limits/session": {
      "get": {
        "summary": "Retrieve default session limits",
        "operationId": "getSessionLimits",
        "tags": [
          "Session Limits"
        ],
        "responses": {
          "200": {
            "description": "Session limits retrieved successfully",
            "schema": {
              "$ref": "#/definitions/limits.SessionLimits"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "patch": {
        "summary": "Update default session limits",
        "operationId": "updateSessionLimits",
        "tags": [
          "Session Limits"
        ],
        "parameters": [
          {
            "description": "Session limits update request",
            "name": "request",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/limits.SessionLimitsRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Session limits updated successfully",
            "schema": {
              "$ref": "#/definitions/limits.SessionLimits"
            }
          },
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      },
      "delete": {
        "summary": "Delete default session limits",
        "operationId": "deleteSessionLimits",
        "tags": [
          "Session Limits"
        ],
        "responses": {
          "204": {
            "description": "Session limits deleted successfully"
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "403": {
            "description": "Forbidden",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "404": {
            "description": "Not Found",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "429": {
            "description": "Too Many Requests",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/errors.ErrorResponse"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "connection.Type": {
      "type": "string",
      "enum": [
        "vless"
      ],
      "x-enum-varnames": [
        "VLESS"
      ]
    },
    "errors.ErrorResponse": {
      "type": "object",
      "required": [
        "error"
      ],
      "properties": {
        "error": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "string",
              "description": "Unique error code identifier"
            },
            "message": {
              "type": "string",
              "description": "Human-readable error message"
            },
            "details": {
              "type": "object",
              "description": "Additional error context"
            }
          }
        }
      }
    },
    "sessions.CreateSessionRequest": {
      "type": "object",
      "required": [
        "client_id",
        "connection_type",
        "zone"
      ],
      "properties": {
        "client_id": {
          "type": "string",
          "description": "Client identifier"
        },
        "connection_type": {
          "$ref": "#/definitions/connection.Type"
        },
        "zone": {
          "type": "string",
          "description": "Zone code (matching the 'code' field from the /zones endpoint)"
        }
      }
    },
    "sessions.SessionResponse": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique session identifier"
        },
        "connection_type": {
          "$ref": "#/definitions/connection.Type"
        },
        "zone": {
          "type": "string"
        },
        "configuration": {
          "type": "object",
          "description": "Connection configuration details"
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "sessions.SessionStatus": {
      "type": "object",
      "properties": {
        "client_id": {
          "type": "string",
          "description": "Client identifier"
        },
        "status": {
          "$ref": "#/definitions/sessions.StatusEnum"
        },
        "duration": {
          "type": "integer",
          "description": "Session duration in seconds"
        },
        "uploaded_bytes": {
          "type": "integer",
          "description": "Total bytes uploaded"
        },
        "downloaded_bytes": {
          "type": "integer",
          "description": "Total bytes downloaded"
        }
      },
      "required": [
        "client_id",
        "status"
      ]
    },
    "sessions.StatusEnum": {
      "type": "string",
      "enum": [
        "created",
        "connected",
        "disconnected"
      ],
      "x-enum-varnames": [
        "Created",
        "Connected",
        "Disconnected"
      ]
    },
    "sessions.EventType": {
      "type": "string",
      "enum": [
        "session_start",
        "session_heartbeat",
        "session_end"
      ],
      "x-enum-varnames": [
        "SessionStart",
        "SessionHeartbeat",
        "SessionEnd"
      ]
    },
    "sessions.SessionEvent": {
      "type": "object",
      "properties": {
        "session_id": {
          "type": "string",
          "description": "Unique session identifier"
        },
        "client_id": {
          "type": "string",
          "description": "Client identifier"
        },
        "event_type": {
          "$ref": "#/definitions/sessions.EventType"
        },
        "duration": {
          "type": "integer",
          "description": "Session duration in seconds"
        },
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Total bytes downloaded"
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Total bytes uploaded"
        }
      },
      "required": [
        "session_id",
        "client_id",
        "event_type"
      ]
    },
    "zones.ZoneResponse": {
      "type": "object",
      "required": [
        "zones"
      ],
      "properties": {
        "zones": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/zones.Zone"
          }
        }
      }
    },
    "zones.Zone": {
      "type": "object",
      "required": [
        "name",
        "code"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "Human-readable zone name"
        },
        "code": {
          "type": "string",
          "description": "Unique zone code"
        },
        "active_nodes": {
          "type": "integer",
          "description": "Number of active nodes in this zone (included when ?include=node_count)"
        }
      }
    },
    "limits.GlobalLimitsRequest": {
      "type": "object",
      "properties": {
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 1099511627776
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 1099511627776
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 104857600
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 104857600
        }
      }
    },
    "limits.GlobalLimits": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the global limits",
          "example": "gl_123456789"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "description": "Creation timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "description": "Last update timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 1099511627776
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 1099511627776
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 104857600
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 104857600
        }
      },
      "required": [
        "id",
        "created_at",
        "updated_at"
      ]
    },
    "limits.ClientLimitsRequest": {
      "type": "object",
      "properties": {
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 549755813888
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 549755813888
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 52428800
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 52428800
        },
        "max_sessions": {
          "type": "integer",
          "description": "Maximum concurrent sessions",
          "example": 5
        },
        "max_reconnections": {
          "type": "integer",
          "description": "Maximum reconnections in a session",
          "example": 20
        }
      }
    },
    "limits.ClientLimits": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the client limits",
          "example": "cl_123456789"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "description": "Creation timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "description": "Last update timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 549755813888
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 549755813888
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 52428800
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 52428800
        },
        "max_sessions": {
          "type": "integer",
          "description": "Maximum concurrent sessions",
          "example": 5
        },
        "max_reconnections": {
          "type": "integer",
          "description": "Maximum reconnections in a session",
          "example": 20
        }
      },
      "required": [
        "id",
        "created_at",
        "updated_at"
      ]
    },
    "limits.SessionLimitsRequest": {
      "type": "object",
      "properties": {
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 10737418240
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 5368709120
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 31457280
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 20971520
        }
      }
    },
    "limits.SessionLimits": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier for the session limits",
          "example": "sl_123456789"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "description": "Creation timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "description": "Last update timestamp",
          "example": "2025-02-28T14:30:00Z"
        },
        "downloaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Download limit in bytes",
          "example": 10737418240
        },
        "uploaded_bytes": {
          "type": "integer",
          "format": "int64",
          "description": "Upload limit in bytes",
          "example": 5368709120
        },
        "download_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Download speed limit in bytes/s",
          "example": 31457280
        },
        "upload_speed": {
          "type": "integer",
          "format": "int64",
          "description": "Upload speed limit in bytes/s",
          "example": 20971520
        }
      },
      "required": [
        "id",
        "created_at",
        "updated_at"
      ]
    }
  },
  "securityDefinitions": {
    "ApiKeyAuth": {
      "type": "apiKey",
      "name": "Authorization",
      "in": "header"
    }
  },
  "security": [
    {
      "ApiKeyAuth": []
    }
  ]
}