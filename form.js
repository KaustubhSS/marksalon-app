function Validate()
{

  if (document.vform.fname.value == "")
  {
    alert("First name must be filled out");
    vform.fname.focus();
    return false;
  }
  else
  {

    if( ! vform.fname.value.match(/^[A-Za-z]+$/))
    {
      alert("Name can only have Alphabet");
      return false;
    }
  }


  if (document.vform.lname.value == "")
  {
    alert("Last name must be filled out");
    vform.lname.focus();
    return false;
  }
  else
  {

    if( ! vform.lname.value.match(/^[A-Za-z]+$/))
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
