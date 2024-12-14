document.querySelector('button').onclick = function () {
    var data = document.querySelector('#txt').value;
    // console.log(data);

    var a = document.querySelector('.row').innerHTML = '';

    var xmlhttp = new XMLHttpRequest();
    console.log(xmlhttp.readyState, xmlhttp.status);
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.readyState, xmlhttp.status);
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log(xmlhttp.responseText);

            var ans = JSON.parse(xmlhttp.responseText);
            console.log(ans);
            ans.forEach(({ flags, name, capital }) => {
                console.log(flags, name, capital);

                var divTag = document.createElement('div');
                divTag.className = 'col-xl-3 col-6 text-center p-3';

                var imgTag = document.createElement('img');
                imgTag.src = flags.png;
                imgTag.style = 'height:200px; width:300px';
                imgTag.className = 'img-fluid';

                var h2Tag = document.createElement('h2');
                h2Tag.innerHTML = name.common;
                h2Tag.style.color = 'white';
                h2Tag.style.padding = '10px';

                var pTag = document.createElement('p');
                pTag.innerHTML = "Capital : " + capital;
                pTag.style.color = 'white';


                divTag.append(imgTag);
                divTag.append(h2Tag);
                divTag.append(pTag);

                document.querySelector('.row').append(divTag);
            });
        }
    }

    xmlhttp.open('get', `https://restcountries.com/v3.1/name/${data}`);
    xmlhttp.send();
}
