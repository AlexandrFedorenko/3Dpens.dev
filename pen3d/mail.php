<?php

$recepient = "sellingru@mail.ru";
$sitename = "3d-seller.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$pen1 = trim($_POST["test"]);
$pen2 = trim($_POST["test2"]);
$num = trim($_POST["num"]);
$num2 = trim($_POST["num2"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nЦвет ручки Myriwell RP100A: $pen1 \nКоличество ручек Myriwell RP100A: $num \nЦвет ручки Myriwell RP100B: $pen2 \nКоличество ручек Myriwell RP100B: $num2 ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");