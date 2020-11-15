$('input[type="checkbox"]').on("change", function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
  if ($(this).is(":checked")) {
    $(this).parent().addClass("greenBackground");
    $('input[type="checkbox"]')
      .not(this)
      .parent()
      .removeClass("greenBackground");
  }
});
const metode = document.querySelector(".metode-bayar-container");
const selesai = document.querySelector(".pembayaran-selesai");

$("#bayar").submit(function (e) {
  e.preventDefault();
  metode.classList.add("hilang");
  selesai.classList.remove("hilang");
});
//   if ($("input[type=checkbox]").isnot(":checked")) {
//     //   $("input[type=checkbox]").css("background", "#19DA08");
//   }
