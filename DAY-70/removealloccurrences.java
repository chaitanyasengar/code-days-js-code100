// How to remove all occurrences of a given character from input String

public class RemoveCharFromString {

	public static void main(String[] args) {

		removeCharFromString("abcbcdjfkd", 'c');
		removeCharFromString("chaitanya singh sengar", 'a');
		removeCharFromString("ç∂©∂ç", '©');

	}

	private static void removeCharFromString(String input, char c) {
		String result = input.replaceAll(String.valueOf(c), "");
		System.out.println(result);
	}

}