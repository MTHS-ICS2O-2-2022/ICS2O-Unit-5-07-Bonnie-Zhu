// Copyright (c) 2023 Bonnie ZHu All rights reserved
//
// Created by: Bonnie zhu
// Created on:SMay 
// This file contains the JS functions for index.html

"use strict"

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var product = 0
  var counter = 0

  while (counter <= numA) {
    product = product + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + product
}