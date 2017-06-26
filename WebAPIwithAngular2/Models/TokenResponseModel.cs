using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPIwithAngular2
{
    public class TokenResponseModel
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("userName")]
        public string Username { get; set; }

        [JsonProperty("userId")]
        public int UserId { get; set; }

        [JsonProperty("resultMessage")]
        public string resultMessage { get; set; }

        [JsonProperty("result")]
        public bool result { get; set; }
    }
}