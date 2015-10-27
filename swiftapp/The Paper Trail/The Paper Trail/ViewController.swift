//
//  ViewController.swift
//  The Paper Trail
//
//  Created by John Morrow on 10/21/15.
//  Copyright © 2015 John Morrow. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UIWebViewDelegate  {
    
    
    @IBOutlet var webview: UIWebView!
    
    func loadAddressURL() {
        webview.allowsInlineMediaPlayback = true
        let fullURL =  "http://the-paper-trail.com"
        let requestURL = NSURL(string:fullURL)
        let requestObj = NSURLRequest(URL:requestURL!)
        webview.loadRequest(requestObj)
    }
    
    /**
     *  For UIWebViewDelegate
     */
    func webView(webView: UIWebView, shouldStartLoadWithRequest request: NSURLRequest, navigationType: UIWebViewNavigationType) -> Bool {
        switch navigationType {
        case .LinkClicked:
            let match = request.URL?.path!.rangeOfString("paper-trail$", options: .RegularExpressionSearch)
            if match==nil {
            // Open external links in Safari
            UIApplication.sharedApplication().openURL(request.URL!)
            return false
            } else {
                return true
            }
        default:
            // Handle other navigation types...
            return true
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        webview.delegate = self
        loadAddressURL()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

