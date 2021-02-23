import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BlinkInput)
public class BlinkInput: CAPPlugin {

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": "Native Swift -> " + value
        ])
    }

    @objc func scanCard(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.success([
            "value": "Scan Card -> Plugin.swift -> " + value
        ])
    }
}
