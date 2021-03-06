
//Create String From File

public class FileString {

    public static void main(String[] args) throws IOException {

        String path = System.getProperty("user.dir") + "\\src\\test.txt";
        Charset encoding = Charset.defaultCharset();

        List<String> lines = Files.readAllLines(Paths.get(path), encoding);
        System.out.println(lines);
    }
}