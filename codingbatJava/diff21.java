Diff21

/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
*/
//since this is on noding bat, I can use Math's abs method.
public int diff21(int n) {
     int difference = Math.abs(n - 21);
    if(n > 21){
        return difference *= 2;
    } else {
      return difference;
    }
}