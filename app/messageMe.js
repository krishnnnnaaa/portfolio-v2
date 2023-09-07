// 'use client'

// export const sendDM = async({name, email, message}) => {


//     const url = 'https://free-email-sender1.p.rapidapi.com/send_mail';
//     const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c',
// 		'X-RapidAPI-Host': 'free-email-sender1.p.rapidapi.com'
// 	},
// 	body: {
// 		to: 'gupta.krishnalko111@gmail.com',
// 		subject: 'DM from your Portfolio',
// 		message: `Hello Krishna!, ${name} has sent you a DM, his/her email is ${email}. Message is: ${message}`,
// 		senders_name: name
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	result = await response.text();
// 	console.log(result);
// } catch (error) {
//     console.error(error);
// }
// }