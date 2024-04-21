/**
 * Класс для проверки мобильного браузера.
 */
export class MobileChecker {
	static userAgent = navigator.userAgent;

	/**
	 * Проверяет, является ли устройство Android.
	 * @returns {boolean} true, если устройство Android, в противном случае false.
	 */
	static get isAndroid(): boolean {
		return Boolean(MobileChecker.userAgent.match(/Android/i));
	}

	/**
	 * Проверяет, является ли устройство BlackBerry.
	 * @returns {boolean} true, если устройство BlackBerry, в противном случае false.
	 */
	static get isBlackBerry(): boolean {
		return Boolean(MobileChecker.userAgent.match(/BlackBerry/i));
	}

	/**
	 * Проверяет, является ли устройство iOS (iPhone, iPad или iPod).
	 * @returns {boolean} true, если устройство iOS, в противном случае false.
	 */
	static get isAppleOS(): boolean {
		return Boolean(MobileChecker.userAgent.match(/iPhone|iPad|iPod/i));
	}

	/**
	 * Проверяет, является ли устройство Opera Mini.
	 * @returns {boolean} true, если устройство Opera Mini, в противном случае false.
	 */
	static get isOpera(): boolean {
		return Boolean(MobileChecker.userAgent.match(/Opera Mini/i));
	}

	/**
	 * Проверяет, является ли устройство Windows.
	 * @returns {boolean} true, если устройство Windows, в противном случае false.
	 */
	static get isWindows(): boolean {
		return Boolean(MobileChecker.userAgent.match(/IEMobile/i));
	}

	/**
	 * Проверяет, является ли устройство любым из поддерживаемых типов (Android, BlackBerry, iOS, Opera Mini, Windows).
	 * @returns {boolean} true, если устройство является любым из поддерживаемых типов, в противном случае false.
	 */
	static get isAny(): boolean {
		return (
			MobileChecker.isAndroid ||
			MobileChecker.isBlackBerry ||
			MobileChecker.isAppleOS ||
			MobileChecker.isOpera ||
			MobileChecker.isWindows
		);
	}
}
