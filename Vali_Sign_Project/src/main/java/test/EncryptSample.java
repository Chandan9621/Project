package test;

import java.security.*;
import java.security.spec.*;
import java.util.Base64;
import javax.crypto.Cipher;

import org.springframework.beans.factory.annotation.Autowired;

import com.ideabytes.commonService.EncryptAndDecrypt;
import com.ideabytes.constants.Constants;

import java.nio.charset.StandardCharsets;

public class EncryptSample {

	public static String encrypt(String plaintext, String publicKeyBase64) throws Exception {
		byte[] plaintextBytes = plaintext.getBytes(StandardCharsets.UTF_8);
		byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyBase64);
		X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);
		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		PublicKey publicKey = keyFactory.generatePublic(keySpec);
		Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
		cipher.init(Cipher.ENCRYPT_MODE, publicKey);
		byte[] encryptedBytes = cipher.doFinal(plaintextBytes);
		return Base64.getEncoder().encodeToString(encryptedBytes);
	}

	public static String decrypt(String encryptedTextBase64, String privateKeyBase64) throws Exception {
		byte[] privateKeyBytes = Base64.getDecoder().decode(privateKeyBase64);
		byte[] encryptedBytes = Base64.getDecoder().decode(encryptedTextBase64);
		PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
		KeyFactory keyFactory = KeyFactory.getInstance("RSA");
		PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec);
		Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
		cipher.init(Cipher.DECRYPT_MODE, privateKey);
		byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
		return new String(decryptedBytes, StandardCharsets.UTF_8);
	}
	@Autowired
	EncryptAndDecrypt encryptDecrypt;
//	public static void main(String[] args) throws Exception {
//		// Generate keys and encode them as Base64 (as shown in your original code)
////		KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
////		keyPairGenerator.initialize(6000); // You can choose the key size you prefer
////		KeyPair keyPair = keyPairGenerator.generateKeyPair();
////
////		PublicKey publicKey = keyPair.getPublic();
////		PrivateKey privateKey = keyPair.getPrivate();
////
////		String publicKeyBase64 = Base64.getEncoder().encodeToString(publicKey.getEncoded());
////		String privateKeyBase64 = Base64.getEncoder().encodeToString(privateKey.getEncoded());
////
////		System.out.println("publicKeyBase64: " + publicKeyBase64 + "\n privateKeyBase64: " + privateKeyBase64);
//
////		String publicKeyBase64 = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuP3DWDa4qzFw4KV/dxDP+ZqKpslqrTlfHP/7c20pYWA/zlkluQ5hFx1YYEpZOnLxTObyhZqDscPyAPgR8vQ1RvRunKZN25YGYx+hXO+OM/uT9ARyBMHadnWkHo1Hk3wRa0bm+WdzpxWy3uxcGeZjy0Hd52KS9Fd6kAHwVVKk3GnoX2pEX7iBDdi3ySnVH89DWqDtEn102WcdkN552XkUj6nMJGUGkIT3TnLnFXUQmggm5SHaCsycsApIg19ucoMmIGCYTDPoG13uEETDmttmN55PBerSfV1TPDb+bU4PFDaWBj0uJPSZb+QPDWk0Huexq+41EnqNp+/KA2/IfBdYwwIDAQAB";
////		String privateKeyBase64 = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4/cNYNrirMXDgpX93EM/5moqmyWqtOV8c//tzbSlhYD/OWSW5DmEXHVhgSlk6cvFM5vKFmoOxw/IA+BHy9DVG9G6cpk3blgZjH6Fc744z+5P0BHIEwdp2daQejUeTfBFrRub5Z3OnFbLe7FwZ5mPLQd3nYpL0V3qQAfBVUqTcaehfakRfuIEN2LfJKdUfz0NaoO0SfXTZZx2Q3nnZeRSPqcwkZQaQhPdOcucVdRCaCCblIdoKzJywCkiDX25ygyYgYJhMM+gbXe4QRMOa22Y3nk8F6tJ9XVM8Nv5tTg8UNpYGPS4k9Jlv5A8NaTQe57Gr7jUSeo2n78oDb8h8F1jDAgMBAAECggEAQA7vpA5e6DkYo1Hrz6ksu3w+Yv8AR7fELeCejBvS5ntT3PqVy30lNcHdpopYV5sR39VhSc51qAr4NEmyvXS/NjDSVMBp2Y4b7Bs531q83VdSpn8blHYkVjzqdgHqNTITPhixRtACBmvHItaqFfXnvKy0ULmbtazNLizdsk4J9KDIHdWVMKJOoFpSD2VHe44r+fFbJb6lc7dL7fpIen7z+n1K9v77ZhM0huK19Q2ePw1ecMnjE5UyoKTIVcEPY5fLU2y0QDsWNoJfpC5AdxUJUusa9IFvMvLjG/geDWkSIEuiCWx/5mmy9AipawbWoHO48e4fVr+WAdih4DM++5DdAQKBgQDA8Nt90jTi9Uv3FSjT/SX//Pae7AAaESx+Sxt0eQWoiWh/2oqjVJsLiR+0xsCnNUfTcHt6FzAahESiuloC3XFDUVavJ3TYkn2LLuwSvy8fFut0HNQ/2tw3vZRBB8Ady+k2AcupTvAngfqh5q64qVp9hG5cZd2wKoxorFCP6N1zwQKBgQD1c8XQHcChhIntjsNbmIBXvLjvYbEvtYR36WUBCUgN5/a9bcVVb/SKWeuniYawOkXwKa0IJmprre7sWZ8jYTBPeLKDUKhWM0vAozy1OEqm1QYsp0u621WneegXmdxesCF9eFsfmCjX1yy1pLTSx0OA7vMNHmw3EEDXqdz37bhdgwKBgHXbayhrnHS7BIFVApCkBW9etcOUQ+eob/ZhqM64EpXGAfh/pcpppyAfzidedVZufIaTIkoNGgxImaiRjuRLIqHNcNcjkgOtUFUR/5DgCkfCd2eBKMIszfKaspIayucopTehVygAGUD47AGz6SzR/n3HxKZab1XqV8Sk5b1SsNvBAoGBAM81o0MkOuCf4Ui5AtcqkP6Ahacg09Iw7NnGIMyVJ00GDFiyeKq9zrWVX8mZ4iiXqT8sD7UXqTOqLE8/AYd+nqgYfqs4xkOvHj5MEA30raDVqVa9DMN8Mn0l/vcdntoY2szvdA3iCGjecBIQL87ZBXWtQ2ZJzpVVlUf7UF3FQ6U9AoGAH+8Ax+CMK3GmY/PN1LSdH27CM70WkSvrJp+VIDpt9PX2jXy0HRBFrg1fnMPwgIYCzpBaYNnrdlO5XMYZgoOZM/Zeh7qJYsJoZOZqioygd8eHuqF91jr7Nn8qyLiaJ82wqWnlKOhsKITOea5iCeMxbrp43OTGoe6gOntJhbCujnc=";
//		
//		// Encrypt and decrypt using the methods
////		String plaintext = "{\"APP\":{\"IBVS_APP_SUCCESS\":{\"statusCode\":\"IBVS_APP_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Application details fetched successfully\",\"fr\":\"Détails de l'application récupérés avec succès\"},\"description\":\"Success scenario\"},\"IBVS_APP_001\":{\"statusCode\":\"IBVS_APP_001\",\"status\":202,\"error\":{\"en\":\"Status codes response error\",\"fr\":\"\"},\"message\":{\"en\":\"Application details fetching failed\",\"fr\":\"\"},\"description\":\"Unforseen error by the system accessing status codes\"},\"IBVS_APP_002\":{\"statusCode\":\"IBVS_APP_002\",\"status\":202,\"error\":{\"en\":\"Admin service reading error\",\"fr\":\"\"},\"message\":{\"en\":\"Application details fetching failed\",\"fr\":\"\"},\"description\":\"Unforseen error by the system accessing admin service\"}},\"USERSIGNUP\":{\"IBVS_USERSIGNUP_SUCCESS\":{\"statusCode\":\"IBVS_USERSIGNUP_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"The user has successfully signed up.\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_USERSIGNUP_001\":{\"statusCode\":\"IBVS_USERSIGNUP_001\",\"status\":400,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"There are no clients for this user.\",\"fr\":\"\"},\"description\":\"There are no clients for this user.\"},\"IBVS_USERSIGNUP_002\":{\"statusCode\":\"IBVS_USERSIGNUP_002\",\"status\":400,\"error\":{\"en\":\"Headers not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"The required headers 'clientId' and 'client secret key' were not included in the request.\",\"fr\":\"\"},\"description\":\"The requested clientid and clietSecretKey is not found in headers.\"},\"IBVS_USERSIGNUP_003\":{\"statusCode\":\"IBVS_USERSIGNUP_003\",\"status\":202,\"error\":{\"en\":\"User details already registered.\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details already registered.\",\"fr\":\"NA\"},\"description\":\"The requested user data is already existed in DB.\"}},\"CLIENTSIGNUP\":{\"IBVS_CLIENTSIGNUP_SUCCESS\":{\"statusCode\":\"IBVS_CLIENTSIGNUP_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"The client has successfully signed up.\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_CLIENTSIGNUP_001\":{\"statusCode\":\"IBVS_CLIENTSIGNUP_001\",\"status\":201,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"The client already exists. Please try again.\",\"fr\":\"\"},\"description\":\"The client already exists. Please try again.\"}},\"APPLOGIN\":{\"IBVS_APPLOGIN_SUCCESS\":{\"statusCode\":\"IBVS_APPLOGIN_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Sign-in successful\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_APPLOGIN_001\":{\"statusCode\":\"IBVS_APPLOGIN_001\",\"status\":404,\"error\":{\"en\":\"User not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"User not found\",\"fr\":\"\"},\"description\":\"The logged user data is not available in database.\"},\"IBVS_APPLOGIN_002\":{\"statusCode\":\"IBVS_APPLOGIN_002\",\"status\":404,\"error\":{\"en\":\"Identifier not found.\",\"fr\":\"NA\"},\"message\":{\"en\":\"The given is identifier not found\",\"fr\":\"\"},\"description\":\"The given is identifier not found.\"},\"IBVS_APPLOGIN_003\":{\"statusCode\":\"IBVS_APPLOGIN_003\",\"status\":404,\"error\":{\"en\":\"Session token is expired.\",\"fr\":\"NA\"},\"message\":{\"en\":\"Session token is expired.\",\"fr\":\"\"},\"description\":\"Session token is expired.\"}},\"LISTOFAPP\":{\"IBVS_LISTOFAPP_SUCCESS\":{\"statusCode\":\"IBVS_LISTOFAPP_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Application selected successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_LISTOFAPP_001\":{\"statusCode\":\"IBVS_LISTOFAPP_001\",\"status\":400,\"error\":{\"en\":\"No data found in application\",\"fr\":\"NA\"},\"message\":{\"en\":\"No data found in application\",\"fr\":\"\"},\"description\":\"There is no data in database based on appId and userId.\"}},\"READCLIENT\":{\"IBVS_READCLIENT_SUCCESS\":{\"statusCode\":\"IBVS_READCLIENT_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Cliet details fetched successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_READCLIENT_001\":{\"statusCode\":\"IBVS_READCLIENT_001\",\"status\":400,\"error\":{\"en\":\"No client details found.\",\"fr\":\"NA\"},\"message\":{\"en\":\"There are no data for client detials.\",\"fr\":\"\"},\"description\":\"There are no data for client detials in DB.\"}},\"CLIENTSBYID\":{\"IBVS_CLIENTSBYID_SUCCESS\":{\"statusCode\":\"IBVS_CLIENTSBYID_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Cliet details fetched successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_CLIENTSBYID_001\":{\"statusCode\":\"IBVS_CLIENTSBYID_001\",\"status\":400,\"error\":{\"en\":\"No client details found.\",\"fr\":\"NA\"},\"message\":{\"en\":\"There are no data for client detials.\",\"fr\":\"\"},\"description\":\"There are no data for client detials based on clientId in DB.\"},\"IBVS_CLIENTSBYID_002\":{\"statusCode\":\"IBVS_CLIENTSBYID_002\",\"status\":202,\"error\":{\"en\":\"The given request there is no clientId\",\"fr\":\"NA\"},\"message\":{\"en\":\"Client id is missing in URL\",\"fr\":\"\"},\"description\":\"Client id is missing in URL\"}},\"CLIENTUPDATE\":{\"IBVS_CLIENTUPDATE_SUCCESS\":{\"statusCode\":\"IBVS_CLIENT_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Clinet details updated successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_CLIENTUPDATE_001\":{\"statusCode\":\"IBVS_CLIENT_001\",\"status\":400,\"error\":{\"en\":\"Client Details is not updated.\",\"fr\":\"NA\"},\"message\":{\"en\":\"The requested clientId data is not updated.\",\"fr\":\"\"},\"description\":\"The requested clientId data is not inserted.\"}},\"CLIENTDELETE\":{\"IBVS_CLIENTDELETE_SUCCESS\":{\"statusCode\":\"IBVS_CLIENTDELETE_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Clinet details deleted successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_CLIENTDELETE_001\":{\"statusCode\":\"IBVS_CLIENTDELETE_001\",\"status\":400,\"error\":{\"en\":\"Client Details is not deleted.\",\"fr\":\"NA\"},\"message\":{\"en\":\"The requested clientId data is not deleted.\",\"fr\":\"\"},\"description\":\"The requested clientId data is not deleted.\"}},\"CONFIG\":{\"IBVS_CONF_SUCCESS\":{\"statusCode\":\"IBVS_CONF_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Device configured successfully\",\"fr\":\"Appareil configuré avec succès\"},\"description\":\"Success scenario\"},\"IBVS_CONF_001\":{\"statusCode\":\"IBVS_CONF_001\",\"status\":409,\"error\":{\"en\":\"Application version mismatch error\",\"fr\":\"Erreur de non-concordance de la version de l'application\"},\"message\":{\"en1\":\"Please update your ValiSign app with the latest version\",\"en\":\": Version not supported – update to new version to continue using Application\",\"fr\":\"Veuillez mettre à jour votre application ValiSign avec la dernière version\"},\"description\":\"Version sent from the app doesn't match with the one stored in database\"},\"IBVS_CONF_002\":{\"statusCode\":\"IBVS_CONF_002\",\"status\":400,\"error\":{\"en\":\"Encryption or data error\",\"fr\":\"Erreur de non-concordance de la version de l'application\"},\"message\":{\"en\":\"Attempted hacking detected. IP locked out for 3 mins. Reinstall application\",\"fr\":\"Veuillez mettre à jour votre application ValiSign avec la dernière version\"},\"description\":\"Either the encryption key or the encrypted data is not found as expected\"},\"IBVS_CONF_003\":{\"statusCode\":\"IBVS_CONF_003\",\"status\":404,\"error\":{\"en\":\"Please ensure the device is properly registered or provide a valid user identifier\",\"fr\":\"\"},\"message\":{\"en\":\"No user found for the device\",\"fr\":\"\"},\"description\":\"The requested user could not be found for the specified device.\"},\"IBVS_CONF_004\":{\"statusCode\":\"IBVS_CONF_004\",\"status\":200,\"error\":{\"en\":\"Please ensure the device is properly registered or provide a valid user identifier\",\"fr\":\"\"},\"message\":{\"en\":\"Mail sent to user\",\"fr\":\"\"},\"description\":\"The email has been successfully sent.\"},\"IBVS_CONF_005\":{\"statusCode\":\"IBVS_CONF_005\",\"status\":404,\"error\":{\"en\":\"error in saving\",\"fr\":\"\"},\"message\":{\"en\":\"Device not registered\",\"fr\":\"\"},\"description\":\"The requested device is not registered in our system. Please make sure the device is properly registered before attempting to use it.\"},\"IBVS_CONF_006\":{\"statusCode\":\"IBVS_CONF_006\",\"status\":201,\"error\":{\"en\":\"NA\",\"fr\":\"\"},\"message\":{\"en\":\"Device registered\",\"fr\":\"\"},\"description\":\"The device has been successfully registered in our system.\"}},\"ADMIN\":{\"IBVS_ADMIN_SUCCESS\":{\"statusCode\":\"IBVS_ADMIN_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Data Inserted successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_ADMIN_001\":{\"statusCode\":\"IBVS_ADMIN_001\",\"status\":200,\"error\":{\"en\":\"Details already registered\",\"fr\":\"NA\"},\"message\":{\"en\":\"Details already registered\",\"fr\":\"\"},\"description\":\"The user details already existed in Database.\"},\"IBVS_ADMIN_002\":{\"statusCode\":\"IBVS_ADMIN_002\",\"status\":406,\"error\":{\"en\":\"Null pointer exception is raised\",\"fr\":\"NA\"},\"message\":{\"en\":\"Null pointer exception is raised\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_ADMIN_003\":{\"statusCode\":\"IBVS_ADMIN_003\",\"status\":400,\"error\":{\"en\":\"No data found\",\"fr\":\"NA\"},\"message\":{\"en\":\"No data found with this clientId and client secret key.\",\"fr\":\"\"},\"description\":\"The\"},\"IBVS_ADMIN_004\":{\"statusCode\":\"IBVS_ADMIN_004\",\"status\":400,\"error\":{\"en\":\"Headers not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"There is no headers clientId and client secret key.\",\"fr\":\"\"},\"description\":\"The requested clientid and clietSecretKey is not found in headers.\"}},\"ALLUSERS\":{\"IBVS_ALLUSERS_SUCCESS\":{\"statusCode\":\"IBVS_ALLUSERS_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details fetched successful\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_ALLUSERS_001\":{\"statusCode\":\"IBVS_ALLUSERS_SUCCESS\",\"status\":404,\"error\":{\"en\":\"User data not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details not found\",\"fr\":\"\"},\"description\":\"There is no user data available in database.\"}},\"USERSBYID\":{\"IBVS_USERSBYID_SUCCESS\":{\"statusCode\":\"IBVS_USERSBYID_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details fetched successful\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_USERSBYID_001\":{\"statusCode\":\"IBVS_USERSBYID_SUCCESS\",\"status\":404,\"error\":{\"en\":\"User data not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details not found\",\"fr\":\"\"},\"description\":\"There is no user data available in database based on user id.\"}},\"USERSBYUSERID\":{\"IBVS_USERSBYUSERID_SUCCESS\":{\"statusCode\":\"IBVS_USERSBYUSERID_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details fetched successful\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_USERSBYUSERID_001\":{\"statusCode\":\"IBVS_USERSBYUSERID_001\",\"status\":404,\"error\":{\"en\":\"User data not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details not found\",\"fr\":\"\"},\"description\":\"There is no user data available in database based on user id.\"}},\"DELETEBYUSERID\":{\"IBVS_DELETEBYUSERID_SUCCESS\":{\"statusCode\":\"IBVS_DELETEBYUSERID_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details deleted successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_USERSBYUSERID_001\":{\"statusCode\":\"IBVS_DELETEBYUSERID_001\",\"status\":404,\"error\":{\"en\":\"User data not deleted\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details not deleted\",\"fr\":\"\"},\"description\":\"There is no data deleted in database based on user id.\"}},\"UPDATEUSER\":{\"IBVS_UPDATEUSER_SUCCESS\":{\"statusCode\":\"IBVS_UPDATEUSER_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details updated successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_UPDATEUSER_001\":{\"statusCode\":\"IBVS_UPDATEUSER_001\",\"status\":404,\"error\":{\"en\":\"User details not updated\",\"fr\":\"NA\"},\"message\":{\"en\":\"NA\",\"fr\":\"NA\"},\"description\":\"The requested api is not updated the user details in DB.\"}},\"USERINSERTED\":{\"IBVS_USERINSERTED_SUCCESS\":{\"statusCode\":\"IBVS_USERINSERTED_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details inserted successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_USERINSERTED_001\":{\"statusCode\":\"IBVS_USERINSERTED_001\",\"status\":404,\"error\":{\"en\":\"User details not inserted\",\"fr\":\"NA\"},\"message\":{\"en\":\"User details not inserted\",\"fr\":\"\"},\"description\":\"The requested api is not inserted user details in DB.\"}},\"INITTRANSACTION\":{\"IBVS_INITTRANSACTION_SUCCESS\":{\"statusCode\":\"IBVS_INITTRANSACTION_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP Generated successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_INITTRANSACTION_001\":{\"statusCode\":\"IBVS_INITTRANSACTION_001\",\"status\":400,\"error\":{\"en\":\"Headers not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"The required headers 'clientId' and 'client secret key' were not included in the request.\",\"fr\":\"\"},\"description\":\"The requested clientid and clietSecretKey is not found in headers.\"},\"IBVS_INITTRANSACTION_002\":{\"statusCode\":\"IBVS_INITTRANSACTION_002\",\"status\":400,\"error\":{\"en\":\"There is no client's for this user.\",\"fr\":\"NA\"},\"message\":{\"en\":\"There is no client's for this user.\",\"fr\":\"\"},\"description\":\"There requested client details not found based on userid.\"},\"IBVS_INITTRANSACTION_003\":{\"statusCode\":\"IBVS_INITTRANSACTION_003\",\"status\":400,\"error\":{\"en\":\"OTP not generated\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP not generated\",\"fr\":\"\"},\"description\":\"OTP not generated\"}},\"AUTHORIZETRANSACTION\":{\"IBVS_AUTHORIZETRANSACTION_SUCCESS\":{\"statusCode\":\"IBVS_AUTHORIZETRANSACTION_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP validated successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_AUTHORIZETRANSACTION_001\":{\"statusCode\":\"IBVS_AUTHORIZETRANSACTION_001\",\"status\":400,\"error\":{\"en\":\"Headers not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"The required headers 'clientId' and 'client secret key' were not included in the request.\",\"fr\":\"\"},\"description\":\"The requested clientid and clietSecretKey is not found in headers.\"},\"IBVS_AUTHORIZETRANSACTION_002\":{\"statusCode\":\"IBVS_AUTHORIZETRANSACTION_002\",\"status\":400,\"error\":{\"en\":\"There is no client's for this user.\",\"fr\":\"NA\"},\"message\":{\"en\":\"There is no client's for this user.\",\"fr\":\"\"},\"description\":\"There requested client details not found based on userid.\"},\"IBVS_AUTHORIZETRANSACTION_003\":{\"statusCode\":\"IBVS_AUTHORIZETRANSACTION_003\",\"status\":400,\"error\":{\"en\":\"OTP Time Expires\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP Time Expires\",\"fr\":\"\"},\"description\":\"The given OTP Time has expires\"},\"IBVS_AUTHORIZETRANSACTION_004\":{\"statusCode\":\"IBVS_AUTHORIZETRANSACTION_004\",\"status\":400,\"error\":{\"en\":\"Invalid OTP\",\"fr\":\"NA\"},\"message\":{\"en\":\"The given OTP is not valid.\",\"fr\":\"\"},\"description\":\"The given OTP is not valid.\"}},\"VALISIGNCODE\":{\"IBVS_VALISIGNCODE_SUCCESS\":{\"statusCode\":\"IBVS_VALISIGNCODE_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP Generated successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_VALISIGNCODE_001\":{\"statusCode\":\"IBVS_VALISIGNCODE_001\",\"status\":400,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"The user session time is expired.\",\"fr\":\"\"},\"description\":\"The given request user session time is expired.\"},\"IBVS_VALISIGNCODE_002\":{\"statusCode\":\"IBVS_VALISIGNCODE_002\",\"status\":400,\"error\":{\"en\":\"User id missmatched.\",\"fr\":\"NA\"},\"message\":{\"en\":\"User is not found.\",\"fr\":\"\"},\"description\":\"The given request user is not found in DB.\"},\"IBVS_VALISIGNCODE_003\":{\"statusCode\":\"IBVS_VALISIGNCODE_003\",\"status\":400,\"error\":{\"en\":\"Client is not found for this user.\",\"fr\":\"NA\"},\"message\":{\"en\":\"The given client id is not found for this user please check the app id.\",\"fr\":\"\"},\"description\":\"The given client id is not found for this user please check the app id.\"},\"IBVS_VALISIGNCODE_004\":{\"statusCode\":\"IBVS_VALISIGNCODE_004\",\"status\":400,\"error\":{\"en\":\"The client has not been request for OTP.\",\"fr\":\"NA\"},\"message\":{\"en\":\"The client has not been request for OTP.\",\"fr\":\"\"},\"description\":\"The client has not been request for OTP.\"}},\"CLIENTREQUEST\":{\"IBVS_CLIENTREQUEST_SUCCESS\":{\"statusCode\":\"IBVS_CLIENTREQUEST_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"OTP Requested successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_CLIENTREQUEST_001\":{\"statusCode\":\"IBVS_CLIENTREQUEST_001\",\"status\":400,\"error\":{\"en\":\"Headers not found\",\"fr\":\"NA\"},\"message\":{\"en\":\"The required headers 'clientId' and 'client secret key' were not included in the request.\",\"fr\":\"\"},\"description\":\"The requested clientid and clietSecretKey is not found in headers.\"},\"IBVS_CLIENTREQUEST_002\":{\"statusCode\":\"IBVS_CLIENTREQUEST_002\",\"status\":400,\"error\":{\"en\":\"There is no client's for this user.\",\"fr\":\"NA\"},\"message\":{\"en\":\"There is no client's for this user.\",\"fr\":\"\"},\"description\":\"There requested client details not found based on userid.\"},\"IBVS_CLIENTREQUEST_003\":{\"statusCode\":\"IBVS_CLIENTREQUEST_003\",\"status\":400,\"error\":{\"en\":\"Invalid user id\",\"fr\":\"NA\"},\"message\":{\"en\":\"There are no users for given userid\",\"fr\":\"\"},\"description\":\"There requested userid is incorrect.\"}},\"TRANSACTIONDETAILS\":{\"IBVS_TRANSACTIONDETAILS_SUCCESS\":{\"statusCode\":\"IBVS_TRANSACTIONDETAILS_SUCCESS\",\"status\":200,\"error\":{\"en\":\"NA\",\"fr\":\"NA\"},\"message\":{\"en\":\"Application details fetched successfully\",\"fr\":\"\"},\"description\":\"Success scenario\"},\"IBVS_TRANSACTIONDETAILS_001 \":{\"statusCode\":\"IBVS_TRANSACTIONDETAILS_001\",\"status\":400,\"error\":{\"en\":\"Transaction details not found.\",\"fr\":\"NA\"},\"message\":{\"en\":\"Transaction details not found.\",\"fr\":\"\"},\"description\":\"Transaction details not found.\"}}}";
////		String encryptedTextBase64 = encrypt(plaintext, Constants.publicKeyBase64);
////		String decryptedText = decrypt(encryptedTextBase64, Constants.privateKeyBase64);
////
////		System.out.println("Original Text: " + plaintext);
//////		System.out.println("Encrypted Text: " + encryptedTextBase64);
////		System.out.println("Decrypted Text: " + decryptedText);
//		
////		this.encryptDecrypt.
//	}

}