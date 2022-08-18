function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kbyDRmWvpB":
        Script1();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var STLpagetitle=player.GetVar("PageTitle");
gtag('event', 'page_view', {page_title: STLpagetitle});
}

