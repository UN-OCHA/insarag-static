(function ($) {
    $(document).ready(function () {


        /* ________________________________ var global ________________________________ */
        var Body = document.getElementById('body');
        var Nav = document.getElementById('nav');
        var Main = document.getElementById('main');
        var MenuMobileBtn = document.getElementById('mobile-menu-btn');



        /* ________________________________ menu mobile _______________________________ */

        MenuMobileBtn.onclick = function (e) {
            Body.classList.toggle('nav-open');
            Nav.classList.toggle('open');
            Main.classList.toggle('hide');
        };

        function resize() {
            if (MenuMobileBtn.style.display != 'block') {
                Body.classList.remove('nav-open');
                Nav.classList.remove('open');
                Main.classList.remove('hide');
            }
        }

        window.onresize = resize;




        /* ________________________________ home _______________________________ */


        $("body.homepage").find(".camera_bar").css({
            "height": 1
        });


        /*  ________________________________ menu mobile Add __________________________ */

        //var menuTop = $(".menu-top").html();

        //$("#mobile-menu-add").html("<div class='menu-top'>"+menuTop+"</div>");  


        /*  ________________________________ Clone Menu _______________________________ */

        var RappelMenuLeft = $("#nav ul.menu > li.active").html();
        var RappelMenuLeftUl = $("#nav ul.menu > li.active > ul");

        if (RappelMenuLeftUl.length == 0) {
            $("#left-column").hide();
            $("#right-column").css({
                "width": "100%"
            });
        } else {
            $("#menu-clone").html(RappelMenuLeft);
        }

        /*  ________________________________ Alert  ________________________________ */

        var alertCount = 0;
        var alertIndex = 0;


        $(".insarag-alert").fadeIn();

        $(".insarag-alert ul li").each(function () {

            var a = $(this).find("a");

            if (a && a.length == 1) {
                var alertLink = a.attr("href");
                var alertTitle = a.attr("title");
                var alertHtml = a.html();
                var badgeColor;

                if (alertTitle.includes('NEWS')) {
                    badgeColor = 'bg-orange';
                } else if (alertTitle.includes('FOCUS')) {
                    badgeColor = 'bg-blue';
                } else {
                    badgeColor = 'bg-red';
                }

                $(this).html('<a> <span class="badge ' + badgeColor + ' color-white">' + alertTitle + '</span> <span class="ti">' + alertHtml + '</span></a>');

                alertCount++;
                $("ul#insaragAlertClone").append('<li class=""><span class="badge ' + badgeColor + ' color-white">' + alertTitle + '</span> <a href="' + alertLink + '">  <strong class="ti">' + alertHtml + '</strong></li>');

            } else {
                $(this).remove();
            }

        });

        $(".insarag-alert ul li").eq(0).addClass("active").siblings().removeClass("active");

        var TimerAlert = setInterval(function () {

            $(".insarag-alert ul li").eq(alertIndex).addClass("active").siblings().removeClass("active");

            if (alertIndex >= alertCount) {
                alertIndex = 0;
            } else {
                alertIndex++;
            }


        }, 2000);


        $(".insarag-alert").on("click", function () {
            $("#insaragAlert").fadeIn(100);
        });

        $(".boxClose").on("click", function () {
            $(this).parents(".overlay-box").fadeOut(50);
        });

        /*  ________________________________ Tables ________________________________ */
        window.onload = function () {
            const compare = (ids, asc) => (row1, row2) => {
                const tdValue = (row, ids) => row.children[ids].textContent;
                const tri = (v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString()
                    .localeCompare(v2);
                return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
            };

            const table = document.querySelectorAll('.automatic-table')

            table.forEach(function (element) {
                const tbody = element.querySelector('tbody');
                const thx = element.querySelectorAll('th');
                const trxb = tbody.querySelectorAll('tr');
                thx.forEach(th => th.addEventListener('click', () => {
                    if (th.classList == 'up') {
                        clearClassTh(thx)
                        th.classList = 'down'
                    }else{
                        clearClassTh(thx)
                        th.classList = 'up'
                    }
                    
                    let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
                    classe.forEach(tr => tbody.appendChild(tr));
                }));
            })

            function clearClassTh(thx) {
                thx.forEach(element => {
                    element.classList = ""
                });
            }
        }
        /*  ________________________________ LANGUES : ________________________________ */

        // var Lang = $("html").attr("lang");
        var Lang = $("html").attr("lang");
        if (Lang == "*") {
            Lang = "en-GB";
        }

        var LiLang = $("#menu-lang ul.menu li a." + Lang).html();

        $("#menu-lang .langSelected").append('<a class="' + Lang + '" href="#">' + LiLang + '</a>').click(function () {
            $(this).parent().toggleClass("open");
        });
    })
})(jQuery);

// Add banner at the top.
(function ($) {
    $(document).ready(function () {
        var html = '<div class="banner-static" style="padding: 1rem; background-color: #fbfb38; position: sticky; top: 0; z-index: 9999; text-align: center;"><p>This is an archived copy of the INSARAG site. To visit the new site, go to <a style="color: inherit;text-decoration: underline;"href="https://www.insarag.org">https://www.insarag.org</a>.</p></div>';
        $('body').prepend(html);
    })
})(jQuery);

