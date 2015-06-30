//
//  ViewController.m
//  The Paper Trail
//
//  Created by John Morrow on 5/30/15.
//  Copyright (c) 2015 John Morrow. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
        _webView.allowsInlineMediaPlayback = YES;
        NSString *fullURL = @"http://127.0.0.1:4000";
        NSURL *url = [NSURL URLWithString:fullURL];
        NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
        [_webView loadRequest:requestObj];

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
