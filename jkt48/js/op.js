function OpenWnd() {
  var oWindow = window.open("", ""); 
  with (oWindow.document) {
    write("<html>");
    write("<head>");
    write("<title>JKT48 Member Rank Battle<\/title>");
    write("<style>");
		write("body { background-color: #070707; color: #f9f9f9; font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif; font-size: 15px; }");
		write("<\/style>");
    write("<\/head>");
    write("<body>");
    write(csort5);
    write("<hr>");
    write("<input type='button' value='Close' onclick='window.close()'>");
    write("<hr>");		
		write("<\/body>");
    write("<\/html>");
    close(); 
  }
}