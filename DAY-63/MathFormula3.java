//surface area of cuboid
import java.util.Scanner;
class TotalSurfaceAreaOfCuboid 
{
      
   public static void main(String args[]) 
    {   
       
	
            	
Scanner s= new Scanner(System.in);
System.out.println("Enter the length of Cubiod:");
double l=s.nextDouble();
 
System.out.println("Enter the breadth of Cubiod:");
double b=s.nextDouble();
 
System.out.println("Enter height of Cubiod:");
double h=s.nextDouble();
   		 
	         double  area=(2*((l*b)+(b*h)+(h*l)));
 
               	  System.out.println("Total SurfaceArea Of Cuboid is:" +area);   
          
   }
}