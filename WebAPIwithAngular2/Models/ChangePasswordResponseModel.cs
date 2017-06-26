using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPIwithAngular2.Models
{
    public class ChangePasswordResponseModel
    {
        [JsonProperty("resultMessage")]
        public string resultMessage { get; set; }

        [JsonProperty("result")]
        public bool result { get; set; }

    }
}