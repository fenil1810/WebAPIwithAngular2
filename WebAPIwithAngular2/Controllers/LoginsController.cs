using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Script.Serialization;
using WebAPIwithAngular2.Filters;
using WebAPIwithAngular2.Models;

namespace WebAPIwithAngular2.Controllers
{
    public class LoginsController : ApiController
    {
        private Model1 db = new Model1();
        
        // POST: api/Logins
        [HttpPost]
        [AllowAnonymous]
        [Route("Login")]
        public  object Login(Login login)
        {
            TokenResponseModel token = new TokenResponseModel();
            string pass = Crypto.SHA256(login.Password);
            if (!ModelState.IsValid)
            {
                return new HttpResponseException(HttpStatusCode.BadRequest).ToString();
            }
            else if (db.Logins.Where(x => x.UserName == login.UserName).ToList().Count() == 0)
            {
                token.AccessToken = null;
                token.Username = null;
                token.UserId = 0;
                token.resultMessage = "Failed";
                token.result = false;
                return token;
            }
            else if (db.Logins.Where(x => x.UserName == login.UserName && x.Password ==pass ).ToList().Count() == 0)
            {
                token.AccessToken =null;
                token.Username = null;
                token.UserId = 0;
                token.resultMessage = "Failed";
                token.result = false;
                return token;
                
            }
            else {
                int id = db.Logins.Where(x => x.UserName == login.UserName).Select(x => x.UserId).Single();
                string s = JwtManager.GenerateToken(login.UserName);
                token.AccessToken = s;
                token.Username = login.UserName;
                token.UserId = id;
                token.resultMessage = "Successful";
                token.result = true;
                return token;
            }
          
        }
        [HttpPost]
        [AllowAnonymous]
        [Route("ChangePassword")]
        [JwtAuthentication]
        public object ChangePassword(ChangePasswordModel changePassword)
        {
            
            ChangePasswordResponseModel changePasswordResponseModel = new ChangePasswordResponseModel();
            string pass = Crypto.SHA256(changePassword.OldPassword);
            if (!ModelState.IsValid)
            {
                return new HttpResponseException(HttpStatusCode.BadRequest).ToString();
            }
            else if (db.Logins.Where(x => x.UserId == changePassword.UserId).ToList().Count() == 0)
            {
                changePasswordResponseModel.resultMessage = "Failed";
                changePasswordResponseModel.result = false;
                return changePasswordResponseModel;
            }
            else if (db.Logins.Where(x => x.UserId == changePassword.UserId && x.Password == pass).ToList().Count() == 0)
            {
                changePasswordResponseModel.resultMessage = "Failed";
                changePasswordResponseModel.result = false;
                return changePasswordResponseModel;

            }
            else
            {   var changePass = db.Logins.Where(x => x.UserId == changePassword.UserId).FirstOrDefault();
                string s = JwtManager.GenerateToken(changePass.UserName);
                changePasswordResponseModel.resultMessage = "Successful";
                changePasswordResponseModel.result = true;
                changePass.Password =Crypto.SHA256(changePassword.NewPassword);
                db.Entry(changePass).State = EntityState.Modified;
                db.SaveChanges();
                return changePasswordResponseModel;
            }

        }

    }
}