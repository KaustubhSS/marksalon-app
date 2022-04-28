function Validate()
{

  if (document.vform.name.value == "")
  {
    alert("Full name must be filled out");
    vform.name.focus();
    return false;
  }
  else
  {

    if( ! vform.name.value.match(/^[A-Za-z]+$/))
    {
      alert("Name can only have Alphabet");
      return false;
    }
  }



  if (document.vform.email.value == "")
  {
    alert("Email must be filled out");
    return false;
  }


  if (document.vform.feed.value == "")
  {
    alert("Feedback must be filled out");
    return false;
  }
}