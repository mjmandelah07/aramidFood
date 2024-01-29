const STATUSCODE = {
  CREATED: 201,
  OK: 200,
  SERVER: 500,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
};

const STATUS = {
  Success: "success",
  Error: "error",
};

const successResponse = (
  status: string,
  data: any
): { status: string; data: any } => {
  return {
    status: status,
    data: data,
  };
};

const errorResponse = (
  status: string,
  data: any
): { status: string; error: any } => {
  return {
    status: status,
    error: data,
  };
};

export { STATUSCODE, successResponse, errorResponse, STATUS };
