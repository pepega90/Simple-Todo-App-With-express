$(document).ready(function () {
    $('.remove').on('click', (e) => {
        let dataID = $(e.target).attr("data-id");
        $.ajax({
            type: 'DELETE',
            url: '/' + dataID,
            success: (res) => {
                location.href = "/";
            },
            error: (err) => {
                console.log(err);
            }
        });
    });

});