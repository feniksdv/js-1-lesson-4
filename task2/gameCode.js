//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = []; //в этом масиве храним ответы пользователя

//2 вопрос
function worksb00() {
    do {
        ok = false;
        event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.b0, event, works.b1, works.b2);
        }
    } while (!ok);
}

//4 вопрос
function worksd00() {
    do {
        ok = false;
        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.d0, event,works.d1,works.d2);
        }
    } while (!ok);
}

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event,works.a1,works.a2);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        worksb00();
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                worksd00();
                switch (event) {
                    case 1:
                        alert("Был задан вопрос: " + works.a00 + "Ваш ответ: " + answers[0][1]);
                        break;
                    case 2:
                        alert((answers[1][0]==1) ? "Был задан вопрос: " + works.b00 + "Ваш ответ: " + answers[1][1] : "Был задан вопрос: " + works.b00 + "Ваш ответ: " + answers[1][2]);
                        break;
                    default:
                        alert("Ошибка");
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event,works.c1,works.c2);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                worksd00();
                switch (event) {
                    case 1:
                        alert("Был задан вопрос: " + works.a00 + "Ваш ответ: " + answers[0][2]);
                        break;
                    case 2:
                        alert((answers[1][0]==1) ? "Был задан вопрос: " + works.c00 + "Ваш ответ: " + answers[1][1] : "Был задан вопрос: " + works.c00 + "Ваш ответ: " + answers[1][2]);
                        break;
                    default:
                        alert("Ошибка");
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event,works1,works2) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    else {
        answers.push([event,works1,works2]);
        console.log(answers);
        return true;
    }
	
    
}