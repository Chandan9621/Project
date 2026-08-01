package com.practice;
import java.util.List;
import java.util.ListIterator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map.Entry;
import java.util.Iterator;

public class ListPrint {
	public static void main(String[] args) {
//		List<Integer>li=new ArrayList<Integer>();
//		li.add(10);
//		li.add(20);
//		li.add(30);
//		li.add(40);
//		li.add(50);
//		System.out.println("list "+li);
//		System.out.println("Contains "+li.contains(4));
//		System.out.println("Get "+li.get(3));
//		System.out.println("Size "+li.size());
//		Iterator<Integer>it=li.iterator();
//		while(it.hasNext()) {
//			int num=it.next();
//			System.out.println("List "+num);
//		}
//		li.stream().forEach(e->{
//			System.out.println(e);
//		});
//		ListIterator<Integer>listIterator=li.listIterator();
//		while (listIterator.hasNext()) {
//            int num = listIterator.next();
//            System.out.println("Element: " + num);
//        }
//		while(listIterator.hasPrevious()) {
//			int num=listIterator.previous();
//			System.out.println("E "+num);
//		}
//		HashMap<Object,Object>hm=new HashMap<Object,Object>();
//		hm.put("A",1);
//		hm.put("B",2);
//		hm.put("C",3);
//		hm.put("D",4);
//		hm.put("E",5);
//		hm.put("F",6);
//		System.out.println("Map "+hm);
//		===============
//		HashSet hs=new HashSet(hm.values());
//		Iterator it=hs.iterator();
//		while(it.hasNext()) {
//			Entry e=(Entry)it.next();
//			System.out.println("KEY "+it.getKey()+" "+it.getValue());
//			System.out.println("VALUES "+it.next());
//		====================================================
		        // Create and fill an array with the same value
//		        int[] intArray = new int[5];
//		        Arrays.fill(intArray, 10); // Fills the array with 10
//		        System.out.println(Arrays.toString(intArray));

		        // Create a copy of an existing array
//		        int[] originalArray = {1, 2, 3, 4, 5};
//		        int[] copiedArray = new int[originalArray.length];
//		        for(int i=0;i<originalArray.length;i++) {
//		        	System.out.println(originalArray[i]);		        }


//		        int[] copiedArray = Arrays.copyOf(originalArray, originalArray.length);
//		        System.out.println(Arrays.toString(copiedArray));
//		        String s="Chandan Pandey";
//		        String newString=s.toLowerCase().replace(" ","");
//		        int a[]=new int[256];
//		        int count=0;
//		        for(int i=0;i<newString.length();i++) {
//		        	a[(int)newString.charAt(i)]++;
//		        }
//		        for(int i=0;i<256;i++) {
//		        	if(a[i]>1) {
//		        		System.out.println((char)i+" "+a[i]);
//		        	}
//===========================================================
//		        	int arr[]= {1,2,3,4,5,6};
//		        
//		        	for(int num:arr) {
//		        		if(isPrime(num)) {
//		        			System.out.println(num +"P");
//		        			System.out.println("AP "+"NP");
//		        		}
//		        		else {
//		        			System.out.println(num +"NPN");
//		        		}
//		        	}
//	}
//		        	public static boolean isPrime(int num) {
//		        		if(num<=1)
//		        			return false;
//		        		for(int i=2;i<=num/2;i++) {
//		        				if(num%i==0) {
//		        				return false;
//		        				}
//		        				
//		        			}return true;
//		        	}
//		        	
		       String []s={"anil","madam","liril","racecar"};
//		String s="liril";     
		int strLength=s.length;
		String rev="";
		             for(int i=0;i<s.length;i++) {
		            	 for(int j=s[i].length()-1;j>=0;j--) {
		            		 rev=rev+s[i].charAt(j);
		            	 }
		            	 if(rev.endsWith(s[i])) {
		            		 System.out.println(s[i]+"====Palindrome");
		            	 }
		            	 else {
		            		 System.out.println(s[i]+"=====Not Palindrome");
		            	 }
		            	 
		            	 
		             }
		            		 
		       }
	}
