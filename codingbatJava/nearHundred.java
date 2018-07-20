//nearHundred

// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

public boolean nearHundred(int n){
    if( (n >= 90 && n <= 110) || (n >= 190 && n <= 210)){
        return true;
    } else {
        return false;
    }
}