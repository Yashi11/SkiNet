namespace API.Errors
{
    public class ApiResponse
    {

        public ApiResponse(int statuscode, string message=null)
        {
            _statuscode = statuscode;
            _message = message ?? GetDefaultMessageForStatusCode(_statuscode);
        }

        private string GetDefaultMessageForStatusCode(int statuscode)
        {
            return statuscode switch{
                400 => "[400 Bad Request] The server cannot process your request due to invalid syntax or a client-side error.",
                401 => "[401 Unauthorized] Access Denied",
                404 => "[404 Not Found] Oops! The page you're looking for doesn't exist.",
                500 => "[500 Internal Server Error] An unexpected error occurred while processing your request. Please try again later. We apologize for the inconvenience.",
                _ => null,
            };
        }

        public int _statuscode { get; }
        public string _message { get; }
    }
}