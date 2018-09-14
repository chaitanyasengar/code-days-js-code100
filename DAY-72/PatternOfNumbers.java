
//print 1 to 45 in two dimension
public class JavaProgram
{
    public static void main(String args[])
    {
        int n=1, i, j;
        for(i=0; i<10; i++)
        {
            for(j=0; j<i; j++)
            {
                System.out.print(n + "  ");
                n++;
            }
            System.out.println();
        }
    }
}