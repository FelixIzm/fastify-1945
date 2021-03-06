//var request = require('request');
var Cookie = require('request-cookies').Cookie;
const axios = require('axios');
const fs = require('fs');


const str_00 = 'bda88568a54f922fcdfc6dbf940e5d00';
const str_0b = '56105c9ab348522591eea18fbe4d080b';
const str_PNSESSIONID = 'PNSESSIONID';
var cook_00 = cook_0b = cook_PNSESSIONID = '';
military_unit = '147 сд';
start_date = '1945-5-1';
finish_date = '1945-5-31';
size_rec = 100;
//from_rec = 0;

function dict2str(dict){
	_str = '';
	for (const [key, value] of Object.entries(dict)) {
		_str+=key+"="+value+"; ";
	}
	return _str;
}


function request_01(size_rec,from_rec) {
    return  new Promise((resolve, reject) => {
        let _cookie = {};
        let headers = {};
        _cookie['r'] = "fa09e451042b48fda33015895bfa9ee2";
        _cookie['Host'] = 'pamyat-naroda.ru';
        _cookie['User-Agent'] = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0';
        _cookie['Pragma'] = 'no-cache';
        headers['Cookie'] = dict2str(_cookie);
        /************** */
        let root_url = 'https://pamyat-naroda.ru/documents/?static_hash=e1f721fd68ba0dd699a8ae39bd40dd1fv5';
        axios.get(root_url)
        .then(function(response){
            let _cookie = {};
    		let options = {};

            for (var i in response.headers['set-cookie']) {
                var cookie = new Cookie(response.headers['set-cookie'][i]);
                _cookie[cookie.key] = cookie.value;
            }
            let cookies = {};
            cookies[str_00] = _cookie[str_00];
            cookies[str_0b] = _cookie[str_0b];
            cookies[str_PNSESSIONID] = cook_PNSESSIONID = _cookie[str_PNSESSIONID];
            cookies['r'] = _cookie[str_0b];
            //headers = parse_file('./mu_files/mu_header3.txt');
            let headers = {};
            headers['Cookie'] = dict2str(cookies);
            headers['Content-Type'] = 'application/json';
            

            let url =  'https://pamyat-naroda.ru/personal_archive/ajax.handler.php?static_hash=84b3b69c0c7f3a07380814b0afc2cc53v5';
            let data = {'ACTION':"GET_RIGHT_PANEL"};
            axios({
                method: 'post',
                url: url,
                data: data,
                headers: headers,
                cookies: cookies
            })
            .then(function(response){
                let data = {'ACTION':"GET_ARCHIVE_DOCUMENTS"};
                axios({
                    method: 'post',
                    url: url,
                    data: data,
                    headers: headers,
                    cookies: response.headers['set-cookie']
                })
                    .then(function(response){
                        let __cookies={
                            "56105c9ab348522591eea18fbe4d080b": cookies["56105c9ab348522591eea18fbe4d080b"],
                            "bda88568a54f922fcdfc6dbf940e5d00": cookies["bda88568a54f922fcdfc6dbf940e5d00"],
                            "BITRIX_PN_DATALINE_LNG": "ru",
                            "L": "",
                            "PNSESSIONID": cookies["PNSESSIONID"],
                            "r": cookies["r"]
                        }
                        let headers = {
                            "Host": "pamyat-naroda.ru",
                            "Accept": "*/*",
                            "Accept-Encoding": "gzip, deflate, br",
                            "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
                            "Connection": "keep-alive",
                            "Origin": "https://pamyat-naroda.ru",
                            "Referer": "https://pamyat-naroda.ru/documents/?static_hash=e1f721fd68ba0dd699a8ae39bd40dd1fv5",
                            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0",
                            "X-Requested-With": "XMLHttpRequest",
                            "cookies": dict2str(__cookies)
                        }
                        
                        url = 'https://pamyat-naroda.ru/bitrix/tools/csrf.php';
                        axios({
                            method: 'post',
                            url: url,
                            headers: headers,
                            cookies: __cookies
                        })
                        .then(function(response){
                            let headers = {};
                            headers['Content-Type'] = 'application/json'
                            headers['Origin']='https://pamyat-naroda.ru'
                            headers['Referer']='https://pamyat-naroda.ru/documents/?static_hash=0f0c3b49f202447a1c584850680729dav5'
                            bs = _cookie[str_00];
                            bs += "=" * ((4 - bs.length % 4) % 4);
                            bs = Buffer.from(bs, 'base64').toString('ascii');
                            //console.log('bs = '+bs);
                            a_bs = bs.split('XXXXXX')[0];
                            b_bs = bs.split('XXXXXX')[1].split('YYYYYY')[0];
                            military_unit = '193';
                            data_t = `{"query":{"bool":{"should":[{"bool":{"should":[{"match_phrase":{"document_type":"Боевые донесения, оперсводки"}},
                                {"match_phrase":{"document_type":"Боевые приказы и распоряжения"}},
                                {"match_phrase":{"document_type":"Отчеты о боевых действиях"}},
                                {"match_phrase":{"document_type":"Переговоры"}},
                                {"match_phrase":{"document_type":"Журналы боевых действий"}},
                                {"match_phrase":{"document_type":"Директивы и указания"}},
                                {"match_phrase":{"document_type":"Приказы"}},{"match_phrase":{"document_type":"Постановления"}},
                                {"match_phrase":{"document_type":"Доклады"}},{"match_phrase":{"document_type":"Рапорты"}},
                                {"match_phrase":{"document_type":"Разведывательные бюллетени и донесения"}},{"match_phrase":{"document_type":"Сведения"}},
                                {"match_phrase":{"document_type":"Планы"}},{"match_phrase":{"document_type":"Планы операций"}},
                                {"match_phrase":{"document_type":"Карты"}},{"match_phrase":{"document_type":"Схемы"}},
                                {"match_phrase":{"document_type":"Справки"}},{"match_phrase":{"document_type":"Прочие документы"}}]}},
                                {"bool":{"should":[{"bool":{"must":[{"range":{"date_from":{"lte":"${finish_date}"}}},
                                {"range":{"date_to":{"gte":"${start_date}"}}}],"boost":3}},
                                {"bool":{"must":[{"range":{"document_date_b":{"lte":"${finish_date}"}}},
                                {"range":{"document_date_f":{"gte":"${start_date}"}}}],"boost":7}}]}},
                                {"bool":{"should":[{"match_phrase":{"authors_list.keyword":
                                {"query":"${military_unit}","boost":"${size_rec}"}}},
                                {"match":{"document_name":{"query":"${military_unit}","type":"phrase","boost":30}}},
                                {"match":{"authors":{"query":"${military_unit}","type":"phrase","boost":20}}},
                                {"match":{"army_unit_label.division":{"query":"${military_unit}","type":"phrase","boost":10}}},
                                {"nested":{"path":"page_magazine","query":{"bool":{"must":[{"match":{"page_magazine.podrs":
                                {"query":"${military_unit}","type":"phrase"}}},
                                {"range":{"page_magazine.date_from":{"lte":"${finish_date}"}}},
                                {"range":{"page_magazine.date_to":{"gte":"${start_date}"}}}]}},"boost":4}}]}}],"minimum_should_match":3}},
                                "_source":["id","document_type","document_number","document_date_b","document_date_f","document_name","archive","fond","opis","delo","date_from","date_to","authors","geo_names","operation_name","secr","image_path","delo_id","deal_type","operation_name"],
                                "size":"${size_rec}","from":"${from_rec}"}`;
                                console.log(size_rec,from_rec);
                            axios({
                                method: 'post',
                                url: 'https://cdn.pamyat-naroda.ru/data/'+a_bs+'/'+b_bs+'/pamyat/document,map,magazine/_search',
                                data: data_t,
                                headers: headers
                                //cookies: __cookies
                            })
                            .then(function(response){
                                //console.log(options.form);
                                rs = {};
                                rs.total = response.data['hits']['total'];
                                rs.data = response.data['hits']['hits'];
                                resolve(rs);
                            })
                        })
                })
                .catch(function(error){
                    console.log(error);
                    reject({});
                });
            
            })
            .catch(function(error){
                console.log(error);
                reject({});
            });
        });
    })
};


async function routes (fastify, options) {
	fastify.get('/:id/:d1', async (req,res) => {
        p1 = request_01(10,0);
        Promise.all([p1])
        .then(result => {
            let total = (result[0].total);
            let fxInt = (~~(result[0].total/size_rec));
            let fxRest = (result[0].total%size_rec);
            let i = 0;
            let f = [];
            while (i<fxInt){
                let l = {};
                l.x=size_rec;
                l.y=i*size_rec;
                f.push(l);
                i++;
            }
            let l = {};
            l.x=fxRest;
            l.y=i*size_rec;
            f.push(l);
            //console.log(f)
            
            Promise.all(
                f.map(o => request_01(o.x, o.y))
            ).then(values => {
                console.log(values.length);
                let aItog = [];
                values.forEach(element => {
                    element.data.forEach(record => {
                        aItog.push(record);
                    })
                });
                res.send(aItog);
            });            
           //res.send(result);
        });

    });

}

module.exports = routes;

