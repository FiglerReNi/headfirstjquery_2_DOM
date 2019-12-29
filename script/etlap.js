$(document).ready(function () {
    var v = false;
    var f;
    var m;
    $('button#vegOn').click(function () {
        if (v == false) {
            //teljesen törli a DOM szerezetből (child element is törlődik)
            //$('.fish').remove();
            //Megtartja, így később használható még (child element is törlődik)
            $f = $('li.fish').parent().parent().detach();
            //A lehetőség
            // $('li.meat').html('Tofu');
            // $('li.hamburger').html('Giant portobello mushroom');
            //B Lehetőség
            //ez csak akor jó, ha egy féle dolgot akarunk helyettesíteni (mindig a hamburger szót) így később könnyen visszaállíthatjuk.
            $('li.hamburger').replaceWith('<li class="portobello"> Giant portobello mushroom </li>');
            //A húsnál több féle dolgot helyettesítünk ugyanazzal és később tudnunk kell, hol mik voltak ezek, ezért a fenti megoldás nem jó.
            $('li.meat').after('<li class="tofu">Tofu</li>');
            $('.tofu').parent().parent().addClass('veg_leaf');
            $m = $('li.meat').detach();
            v = true;
        }
    });
    $('button#restoreMe').click(function () {
        if (v == true) {
            $('ul.menu_entrees').children().first().before($f);
            $('li.portobello').replaceWith('<li class="hamburger"> Hamburger </li>');
            $('li.tofu').each(function (i) {
                $(this).after($m[i]);
            });
            $('.tofu').remove();
            $('li.meat').parent().parent().removeClass('veg_leaf');
            v = false;
        }
    });
});

//DOM jquery methods
// $('li.fish').children();
// $('li.fish').parent();
// $('li.fish').parents(); - az összes parent
// $('li.fish').prev();
// $('li.fish').next();
// $('li.fish').siblings(); - az összes azonos szintű elem
// $("li").closest("ul"); - li element parentjei közt az első ul element

//$f - a változó elá $ jelet teszünk, ha DOM elemeket tárolunk benne, amit jquerytől kapunk vissza

//HTML elem beszúrása
//before();
//after();

//filters
//$(".menu_list").children().first();  - első elem
//$(".menu_list").$(".menu_list").children().first(); children().last(); - utolsó elem
//$(".menu_list").children().eq(1); - meghatározott elem (tömb hányadi eleme)
//$(".menu_list").children().slice(1,3); - a második elemet adja vissza (mindig a két érték közöttit)
//$(".menu_list").parents().filter(".organic")
//$("ul.menu_list.organic").children().not(".local"); - mindent visszaad a childrenek közül, ami nem egyezik

//find an element
//var $my_elements = $("li");
//$my_elements.find("a");

//hozzáfűzés
//$("img#oreilly").wrap("<a href='http://www.oreilly.com'></a>");