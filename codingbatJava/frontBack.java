//frontBack

//Given a string, return a new string where the first and last chars have been exchanged.


public String frontBack(String str){
    if(str.length() <= 1){
      return str;
    }
  
    Character front = str.charAt(0);
    String middle = str.substring(1, str.length() - 1);
    Character back = str.charAt(str.length() - 1);
    return back + middle + front;
}