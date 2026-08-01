package com.practice;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class Palindrome {
	
//	int a=5;
//	public static boolean isPrime(int num) {
//		int flag=1;
//		if(num<=1)
//			return false;
//	for(int i=2;i<=num/2;i++) {
//		if(num%i==0) {
//	       return false;
//	}}return true ;
//	
//	}
	public static void main(String[] args) {
//		
//		int a[]= {1,2,3,4,5,6,7};
//		int c=0;
//		for(int num:a) {
//			if(isPrime(num)) {
//				System.out.println(num+"is prime number");
//			}
//			else {
//				System.out.println(num+"is not prime number");
//			}
//==============================================================
			
//			public static void main(String[] args) {
//				String s="Chandan Pandey";
//				int c=0;
//				System.out.println(s.replace(" ", "").length());
//				String newStr=s.replace(" ", "").toLowerCase();
//				int count[]=new int[256];
//				for(int i=0;i<newStr.length();i++) {
//				  count[(int)newStr.charAt(i)]++;
//				}for(int i=0;i<256;i++) {
//					if(count[i]!=0) {
//						System.out.println((char)i+" "+count[i]);
//					}
//				}
//			}
		

//==============================List to Arrary==================
//	 List<Integer> numbers = Arrays.asList(2,4,6,6,3);
//	 int[]ar=new int[numbers.size()];
//	 for(int i=0;i<ar.length;i++)
//	 ar[i]=numbers.get(i);
//	 int max1=Arrays.stream(ar).max().getAsInt();
//     System.out.println(max1);
//===========================Arrary to List=======================
// 	int arr[]= {1,2,3,4,5,2,1};
// 	System.out.println("Array to List "+Arrays.asList((Arrays.toString(arr))));
//	int arrr[]= {1,2,3,4,5,2,1};
//	int max =Arrays.stream(arrr).max().getAsInt();
//	System.out.println("max "+max);
//	
	 

            
	
//=========================Palindrome=========================
//	String[]s= {"anil","madam","liril"};
//	String rev="";
//
//		for(int i=0;i<s.length;i++) {
//       	 for(int j=s[i].length()-1;j>=0;j--) {
//       		 rev=rev+s[i].charAt(j);
//       	 }
//       	 if(rev.endsWith(s[i])) {
//       		 System.out.println(s[i]+"====Palindrome");
//       	 }
//       	 else {
//       		 System.out.println(s[i]+"=====Not Palindrome");
//       	 }
//       	 
//       	 
//		
//	}
//=============================================
//		Greatest Of Three Numbers
//		int a=1;int b=2;int c=22;
//		int maximum=Stream.of(a,b,c).max(Comparator.naturalOrder()).get();
//		System.out.println("maximum "+maximum);
		
//======================
//		Print Pattern->Right Angle Pattern.
		for(int i=0;i<6;i++) {
			for(int j=0;j<=i;j++) {
				System.out.print("* ");
			}System.out.println();
		}
		for (int i = 1; i <= 6; i++) {
            // Print leading spaces
            for (int j =6-i; j > 0; j--) {
                System.out.print("  "); // Two spaces for better alignment
            }
            // Print stars
            for (int k=1; k<=i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
//===============================
//		for(int i=1;i<=5;i++) {
//			for(int j=1;j<=i;j++) {
//				System.out.print(j+" ");
//			}System.out.println();
//		}
//		=================================================
//		String rev="";
//		System.out.println("==============");
//		String[]ar= {"liril","madam","oyo","anil"};
//		for(int i=0;i<ar.length;i++) {
//			for(int j=ar[i].length()-1;j>=0;j--) {
//				rev=rev+ar[i].charAt(j);
//			}
//			if(rev.endsWith(ar[i]))
//				System.out.println("Palindrome");
//			else
//				System.out.println("Not Palindrome");
//		}
		
		
		
		
		
		
		
		
//		for(int i=0;i<ar.length;i++) {
//			for(int j=ar[i].length()-1;j>=0;j--) {
//				rev=rev+ar[i].charAt(j);
//			}
//			if(rev.endsWith(ar[i]))
//				System.out.println("Palindrome");
//			else
//				System.out.println("Not Palindrome");
//		}
//		int p=5;
		for(int p=1;p<=5;p++) {
			for(int q=p;q>=1;q--) {
				System.out.print(" ");
			}System.out.print("*");
		}
		
		
		
}
	
}
