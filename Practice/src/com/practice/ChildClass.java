package com.practice;


public class ChildClass extends ParentClass {
	public void m1() {
		System.out.println("Child");
	}
	public void m3() {
		System.out.println("Child");
	}

	public static void main(String[] args) {
	ParentClass pc=new ChildClass();
		pc.m2();
		pc.m1();
//		pc.m3();
		
	    

	}
	}
