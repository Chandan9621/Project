package com.practice;

import java.util.InputMismatchException;
import java.util.Scanner;

public class DemoException extends Exception{
	public DemoException(String msg) {
		super(msg);
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		try {
			System.out.println("Enter bsal of Emp");
			int bsal=sc.nextInt();
			if(bsal<12000) {
				DemoException de=new DemoException("Invalid bsal");
				throw de;
			}
			float bsa=bsal+0.93F*bsal;
			System.out.println(bsa);
			
		}
		catch(InputMismatchException ime) {
			System.out.println("Enter only int bsal");
		}
		catch(DemoException de) {
			System.out.println(de.getMessage());
		}
	}

}
