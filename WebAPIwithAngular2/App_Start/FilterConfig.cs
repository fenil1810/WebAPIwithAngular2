using System.Web;
using System.Web.Http.Filters;
using System.Web.Mvc;

namespace WebAPIwithAngular2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
