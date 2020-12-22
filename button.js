// JavaScript Document

$("button").click(function () {
    $(this).value="Item in Cart";
	$(this).toggleClass('activee');
	$(this).removeClass('btn-circle');
	$(this).removeClass('btn-b');
	$(this).removeClass('btn');
}
