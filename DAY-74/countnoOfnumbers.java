//count no of numbers in string

import java.util.Scanner;
  
class ExtractNumberFromString
{
  public static void main(String[] args) 
  {
      String str;
      String numbers;
       
      Scanner SC=new Scanner(System.in);
       
      System.out.print("Enter string that contains numbers: ");
      str=SC.nextLine();
       
      //extracting string
      numbers=str.replaceAll("[^0-9]", "");
       
      System.out.println("Numbers are: " + numbers);
  }
}