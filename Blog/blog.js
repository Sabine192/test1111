$(document).ready(function() {

    // Functie voor het openen van het navigatiemenu
    $.fn.openNav = function() {
        return this.each(function() {
            $(this).css('width', '100%');
        });
    };

    // Functie voor het sluiten van het navigatiemenu
    $.fn.closeNav = function() {
        return this.each(function() {
            $(this).css('width', '0');
        });
    };

    // Event handler voor het openen van het navigatiemenu
    $('#openNavBtn').click(function() {
        $('#myNav').openNav();
    });

    // Event handler voor het sluiten van het navigatiemenu
    $('.closebtn').click(function() {
        $('#myNav').closeNav();
    });

    // Verberg de blog-teksten standaard
    $("#blog, #blog1, #blog2").addClass("hidden");

    // Toggle functie voor de knoppen
    $("#btn").click(function() {
        $("#blog").toggleClass("hidden");
    });

    $("#btn1").click(function() {
        $("#blog1").toggleClass("hidden");
    });

    $("#btn2").click(function() {
        $("#blog2").toggleClass("hidden");
    });

    // Blog laden via knoppen
    $("#btn").click(function() {
        $("#blog").load("blogbestand.html #blog");
    });

    $("#btn1").click(function() {
        $("#blog1").load("blogbestand.html #blog1");
    });
    
    $("#btn2").click(function() {
        $("#blog2").load("blogbestand.html #blog2");
    });

    // Blog formulier verzenden
    $('#blogForm').submit(function(event) {
        event.preventDefault();

        var title = $('#title').val().trim();
        var content = $('#content').val().trim();
        var author = $('#author').val().trim();
        
        if (title === '' || content === '' || author === '') {
            alert('Vul alstublieft alle velden in.');
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'add_article.php',
            data: {
                title: title,
                content: content,
                author: author
            },
            success: function(response) {
                alert('Blogartikel succesvol toegevoegd!');

                // Leeg de invoervelden na succesvolle toevoeging
                $('#title').val('');
                $('#content').val('');
                $('#author').val('');
            },
            error: function(xhr, status, error) {
                alert('Er is een fout opgetreden bij het toevoegen van het blogartikel.');
                console.error(error);
            }
        });
    });

    // Knop Hannah Jesse om te verbergen of tonen
    $('#btnToggle').on('click', function () {
        $('.rightcolumn .card p').toggle();
    });
});