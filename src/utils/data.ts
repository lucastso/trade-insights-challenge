const apiData = [
  {
    userId: 'user 1',
    dateAccessed: '2023-10-25',
    timeAccessed: '04:44:13',
    url: 'https://wikipedia.org',
    timeSpent: 228
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-16',
    timeAccessed: '00:07:21',
    url: 'https://wikipedia.org',
    timeSpent: 322
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-21',
    timeAccessed: '23:41:10',
    url: 'https://wikipedia.org',
    timeSpent: 259
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-15',
    timeAccessed: '14:01:00',
    url: 'https://google.com',
    timeSpent: 425
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-06',
    timeAccessed: '19:02:46',
    url: 'https://stackoverflow.com',
    timeSpent: 192
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-11',
    timeAccessed: '09:11:22',
    url: 'https://github.com',
    timeSpent: 362
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-30',
    timeAccessed: '09:55:18',
    url: 'https://github.com',
    timeSpent: 405
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-17',
    timeAccessed: '06:32:43',
    url: 'https://example.com',
    timeSpent: 522
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-15',
    timeAccessed: '14:51:23',
    url: 'https://google.com',
    timeSpent: 347
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-09',
    timeAccessed: '06:05:14',
    url: 'https://google.com',
    timeSpent: 276
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-24',
    timeAccessed: '10:05:53',
    url: 'https://github.com',
    timeSpent: 28
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-29',
    timeAccessed: '02:04:03',
    url: 'https://github.com',
    timeSpent: 67
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-11',
    timeAccessed: '00:55:52',
    url: 'https://stackoverflow.com',
    timeSpent: 411
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-19',
    timeAccessed: '21:36:33',
    url: 'https://example.com',
    timeSpent: 237
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-08',
    timeAccessed: '21:28:30',
    url: 'https://wikipedia.org',
    timeSpent: 95
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-09',
    timeAccessed: '00:01:27',
    url: 'https://wikipedia.org',
    timeSpent: 401
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-01',
    timeAccessed: '20:16:03',
    url: 'https://stackoverflow.com',
    timeSpent: 571
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-19',
    timeAccessed: '22:43:59',
    url: 'https://google.com',
    timeSpent: 93
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-04',
    timeAccessed: '19:57:32',
    url: 'https://example.com',
    timeSpent: 323
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-04',
    timeAccessed: '23:40:43',
    url: 'https://google.com',
    timeSpent: 342
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-05',
    timeAccessed: '11:58:40',
    url: 'https://stackoverflow.com',
    timeSpent: 226
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-06',
    timeAccessed: '17:45:07',
    url: 'https://github.com',
    timeSpent: 354
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-04',
    timeAccessed: '07:43:43',
    url: 'https://stackoverflow.com',
    timeSpent: 267
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-31',
    timeAccessed: '00:53:51',
    url: 'https://wikipedia.org',
    timeSpent: 412
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-26',
    timeAccessed: '03:33:38',
    url: 'https://stackoverflow.com',
    timeSpent: 559
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-16',
    timeAccessed: '07:19:07',
    url: 'https://wikipedia.org',
    timeSpent: 442
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-16',
    timeAccessed: '00:52:02',
    url: 'https://example.com',
    timeSpent: 15
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-31',
    timeAccessed: '10:36:21',
    url: 'https://wikipedia.org',
    timeSpent: 323
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-26',
    timeAccessed: '11:36:43',
    url: 'https://stackoverflow.com',
    timeSpent: 376
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-22',
    timeAccessed: '04:34:38',
    url: 'https://wikipedia.org',
    timeSpent: 253
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-08',
    timeAccessed: '22:57:28',
    url: 'https://google.com',
    timeSpent: 481
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-07',
    timeAccessed: '10:52:44',
    url: 'https://stackoverflow.com',
    timeSpent: 598
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-30',
    timeAccessed: '03:12:06',
    url: 'https://wikipedia.org',
    timeSpent: 584
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-23',
    timeAccessed: '11:34:34',
    url: 'https://example.com',
    timeSpent: 249
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-15',
    timeAccessed: '19:48:29',
    url: 'https://example.com',
    timeSpent: 245
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-25',
    timeAccessed: '22:01:35',
    url: 'https://stackoverflow.com',
    timeSpent: 52
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-07',
    timeAccessed: '16:04:20',
    url: 'https://github.com',
    timeSpent: 132
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-31',
    timeAccessed: '22:58:19',
    url: 'https://wikipedia.org',
    timeSpent: 105
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-29',
    timeAccessed: '10:31:52',
    url: 'https://github.com',
    timeSpent: 43
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-11',
    timeAccessed: '14:03:23',
    url: 'https://stackoverflow.com',
    timeSpent: 358
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-12',
    timeAccessed: '21:08:31',
    url: 'https://stackoverflow.com',
    timeSpent: 495
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-22',
    timeAccessed: '13:12:51',
    url: 'https://wikipedia.org',
    timeSpent: 228
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-09',
    timeAccessed: '21:17:02',
    url: 'https://google.com',
    timeSpent: 214
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-06',
    timeAccessed: '09:40:01',
    url: 'https://github.com',
    timeSpent: 451
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-15',
    timeAccessed: '20:46:36',
    url: 'https://example.com',
    timeSpent: 251
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-03',
    timeAccessed: '06:59:43',
    url: 'https://google.com',
    timeSpent: 4
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-06',
    timeAccessed: '01:17:24',
    url: 'https://github.com',
    timeSpent: 199
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-20',
    timeAccessed: '22:34:22',
    url: 'https://wikipedia.org',
    timeSpent: 208
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-21',
    timeAccessed: '22:42:41',
    url: 'https://stackoverflow.com',
    timeSpent: 48
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-23',
    timeAccessed: '18:15:30',
    url: 'https://stackoverflow.com',
    timeSpent: 269
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-15',
    timeAccessed: '05:23:57',
    url: 'https://example.com',
    timeSpent: 304
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-16',
    timeAccessed: '08:01:58',
    url: 'https://google.com',
    timeSpent: 219
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-11',
    timeAccessed: '17:00:53',
    url: 'https://wikipedia.org',
    timeSpent: 301
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-08',
    timeAccessed: '04:53:30',
    url: 'https://example.com',
    timeSpent: 210
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-29',
    timeAccessed: '13:31:59',
    url: 'https://google.com',
    timeSpent: 549
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-15',
    timeAccessed: '18:00:10',
    url: 'https://google.com',
    timeSpent: 168
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-06',
    timeAccessed: '18:32:01',
    url: 'https://github.com',
    timeSpent: 132
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-25',
    timeAccessed: '04:12:53',
    url: 'https://github.com',
    timeSpent: 491
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-13',
    timeAccessed: '05:08:13',
    url: 'https://stackoverflow.com',
    timeSpent: 416
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-07',
    timeAccessed: '06:29:06',
    url: 'https://example.com',
    timeSpent: 296
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-24',
    timeAccessed: '17:22:40',
    url: 'https://stackoverflow.com',
    timeSpent: 599
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-06',
    timeAccessed: '23:42:09',
    url: 'https://example.com',
    timeSpent: 531
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-20',
    timeAccessed: '14:21:11',
    url: 'https://stackoverflow.com',
    timeSpent: 343
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-07',
    timeAccessed: '08:23:45',
    url: 'https://wikipedia.org',
    timeSpent: 392
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-28',
    timeAccessed: '22:50:37',
    url: 'https://github.com',
    timeSpent: 293
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-14',
    timeAccessed: '04:09:14',
    url: 'https://github.com',
    timeSpent: 301
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-07',
    timeAccessed: '13:47:54',
    url: 'https://stackoverflow.com',
    timeSpent: 545
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-06',
    timeAccessed: '14:55:04',
    url: 'https://wikipedia.org',
    timeSpent: 120
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-06',
    timeAccessed: '20:46:13',
    url: 'https://stackoverflow.com',
    timeSpent: 138
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-09',
    timeAccessed: '11:01:49',
    url: 'https://github.com',
    timeSpent: 518
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-15',
    timeAccessed: '01:50:38',
    url: 'https://google.com',
    timeSpent: 491
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-04',
    timeAccessed: '04:08:38',
    url: 'https://wikipedia.org',
    timeSpent: 124
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-19',
    timeAccessed: '10:38:59',
    url: 'https://example.com',
    timeSpent: 196
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-27',
    timeAccessed: '17:25:37',
    url: 'https://wikipedia.org',
    timeSpent: 72
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-13',
    timeAccessed: '04:50:34',
    url: 'https://google.com',
    timeSpent: 346
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-09',
    timeAccessed: '22:20:28',
    url: 'https://example.com',
    timeSpent: 51
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-24',
    timeAccessed: '17:19:24',
    url: 'https://wikipedia.org',
    timeSpent: 88
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-14',
    timeAccessed: '23:50:52',
    url: 'https://example.com',
    timeSpent: 435
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-10',
    timeAccessed: '02:16:25',
    url: 'https://github.com',
    timeSpent: 290
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-10',
    timeAccessed: '21:37:42',
    url: 'https://stackoverflow.com',
    timeSpent: 342
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-16',
    timeAccessed: '15:26:43',
    url: 'https://github.com',
    timeSpent: 203
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-04',
    timeAccessed: '15:16:25',
    url: 'https://github.com',
    timeSpent: 117
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-19',
    timeAccessed: '00:22:26',
    url: 'https://stackoverflow.com',
    timeSpent: 251
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-19',
    timeAccessed: '06:05:00',
    url: 'https://github.com',
    timeSpent: 460
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-22',
    timeAccessed: '16:18:09',
    url: 'https://wikipedia.org',
    timeSpent: 459
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-19',
    timeAccessed: '15:02:09',
    url: 'https://stackoverflow.com',
    timeSpent: 292
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-16',
    timeAccessed: '07:12:48',
    url: 'https://google.com',
    timeSpent: 16
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-31',
    timeAccessed: '21:30:18',
    url: 'https://google.com',
    timeSpent: 371
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-16',
    timeAccessed: '06:42:51',
    url: 'https://example.com',
    timeSpent: 407
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-25',
    timeAccessed: '02:52:47',
    url: 'https://github.com',
    timeSpent: 143
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-20',
    timeAccessed: '04:58:07',
    url: 'https://google.com',
    timeSpent: 128
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-11',
    timeAccessed: '10:15:37',
    url: 'https://example.com',
    timeSpent: 279
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-25',
    timeAccessed: '07:00:23',
    url: 'https://stackoverflow.com',
    timeSpent: 236
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-12',
    timeAccessed: '09:34:15',
    url: 'https://google.com',
    timeSpent: 384
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-09',
    timeAccessed: '02:33:21',
    url: 'https://wikipedia.org',
    timeSpent: 277
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-24',
    timeAccessed: '21:40:24',
    url: 'https://stackoverflow.com',
    timeSpent: 234
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-05',
    timeAccessed: '00:57:35',
    url: 'https://wikipedia.org',
    timeSpent: 215
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-30',
    timeAccessed: '21:03:27',
    url: 'https://example.com',
    timeSpent: 27
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-25',
    timeAccessed: '05:15:10',
    url: 'https://google.com',
    timeSpent: 124
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-16',
    timeAccessed: '12:15:17',
    url: 'https://google.com',
    timeSpent: 453
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-12',
    timeAccessed: '18:32:07',
    url: 'https://github.com',
    timeSpent: 595
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-08',
    timeAccessed: '11:47:07',
    url: 'https://stackoverflow.com',
    timeSpent: 250
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-05',
    timeAccessed: '00:05:52',
    url: 'https://google.com',
    timeSpent: 107
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-20',
    timeAccessed: '06:14:11',
    url: 'https://github.com',
    timeSpent: 83
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-18',
    timeAccessed: '07:06:11',
    url: 'https://wikipedia.org',
    timeSpent: 495
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-14',
    timeAccessed: '12:17:25',
    url: 'https://wikipedia.org',
    timeSpent: 172
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-21',
    timeAccessed: '17:17:52',
    url: 'https://google.com',
    timeSpent: 381
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-27',
    timeAccessed: '01:53:04',
    url: 'https://github.com',
    timeSpent: 270
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-14',
    timeAccessed: '05:58:46',
    url: 'https://github.com',
    timeSpent: 39
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-22',
    timeAccessed: '02:46:59',
    url: 'https://stackoverflow.com',
    timeSpent: 358
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-01',
    timeAccessed: '19:17:45',
    url: 'https://wikipedia.org',
    timeSpent: 459
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-28',
    timeAccessed: '12:25:39',
    url: 'https://github.com',
    timeSpent: 541
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-30',
    timeAccessed: '09:02:18',
    url: 'https://example.com',
    timeSpent: 50
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-22',
    timeAccessed: '16:59:59',
    url: 'https://wikipedia.org',
    timeSpent: 501
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-04',
    timeAccessed: '09:23:30',
    url: 'https://stackoverflow.com',
    timeSpent: 227
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-24',
    timeAccessed: '06:22:17',
    url: 'https://github.com',
    timeSpent: 26
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-09',
    timeAccessed: '08:31:48',
    url: 'https://example.com',
    timeSpent: 528
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-23',
    timeAccessed: '09:23:25',
    url: 'https://wikipedia.org',
    timeSpent: 93
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-07',
    timeAccessed: '14:18:00',
    url: 'https://google.com',
    timeSpent: 17
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-27',
    timeAccessed: '20:46:44',
    url: 'https://google.com',
    timeSpent: 335
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-13',
    timeAccessed: '03:24:54',
    url: 'https://google.com',
    timeSpent: 427
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-02',
    timeAccessed: '05:57:37',
    url: 'https://example.com',
    timeSpent: 269
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-30',
    timeAccessed: '21:56:01',
    url: 'https://google.com',
    timeSpent: 284
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-11',
    timeAccessed: '11:45:38',
    url: 'https://wikipedia.org',
    timeSpent: 543
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-02',
    timeAccessed: '13:33:07',
    url: 'https://github.com',
    timeSpent: 290
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-01',
    timeAccessed: '05:27:08',
    url: 'https://stackoverflow.com',
    timeSpent: 142
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-18',
    timeAccessed: '14:48:36',
    url: 'https://example.com',
    timeSpent: 117
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-07',
    timeAccessed: '12:48:35',
    url: 'https://github.com',
    timeSpent: 71
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-21',
    timeAccessed: '17:23:09',
    url: 'https://github.com',
    timeSpent: 370
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-20',
    timeAccessed: '11:09:28',
    url: 'https://wikipedia.org',
    timeSpent: 510
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-11',
    timeAccessed: '21:57:53',
    url: 'https://wikipedia.org',
    timeSpent: 247
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-16',
    timeAccessed: '15:58:49',
    url: 'https://example.com',
    timeSpent: 313
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-19',
    timeAccessed: '01:59:37',
    url: 'https://stackoverflow.com',
    timeSpent: 330
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-02',
    timeAccessed: '12:53:34',
    url: 'https://google.com',
    timeSpent: 198
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-14',
    timeAccessed: '22:00:55',
    url: 'https://github.com',
    timeSpent: 218
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-17',
    timeAccessed: '09:20:52',
    url: 'https://github.com',
    timeSpent: 258
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-04',
    timeAccessed: '10:12:16',
    url: 'https://stackoverflow.com',
    timeSpent: 392
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-11',
    timeAccessed: '11:24:59',
    url: 'https://wikipedia.org',
    timeSpent: 130
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-19',
    timeAccessed: '00:00:12',
    url: 'https://example.com',
    timeSpent: 32
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-23',
    timeAccessed: '13:32:36',
    url: 'https://google.com',
    timeSpent: 520
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-16',
    timeAccessed: '16:08:42',
    url: 'https://wikipedia.org',
    timeSpent: 482
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-05',
    timeAccessed: '13:30:11',
    url: 'https://github.com',
    timeSpent: 592
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-01',
    timeAccessed: '05:24:41',
    url: 'https://stackoverflow.com',
    timeSpent: 31
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-24',
    timeAccessed: '02:08:49',
    url: 'https://wikipedia.org',
    timeSpent: 589
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-20',
    timeAccessed: '13:21:38',
    url: 'https://google.com',
    timeSpent: 314
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-08',
    timeAccessed: '05:44:57',
    url: 'https://github.com',
    timeSpent: 132
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-13',
    timeAccessed: '09:22:54',
    url: 'https://google.com',
    timeSpent: 269
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-09',
    timeAccessed: '03:47:39',
    url: 'https://example.com',
    timeSpent: 575
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-17',
    timeAccessed: '07:48:57',
    url: 'https://google.com',
    timeSpent: 409
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-13',
    timeAccessed: '07:47:57',
    url: 'https://stackoverflow.com',
    timeSpent: 500
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-01',
    timeAccessed: '01:31:18',
    url: 'https://google.com',
    timeSpent: 408
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-18',
    timeAccessed: '12:47:13',
    url: 'https://example.com',
    timeSpent: 151
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-28',
    timeAccessed: '10:12:32',
    url: 'https://github.com',
    timeSpent: 149
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-06',
    timeAccessed: '11:36:33',
    url: 'https://wikipedia.org',
    timeSpent: 484
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-07',
    timeAccessed: '06:51:26',
    url: 'https://example.com',
    timeSpent: 381
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-25',
    timeAccessed: '18:01:52',
    url: 'https://example.com',
    timeSpent: 215
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-11',
    timeAccessed: '05:29:48',
    url: 'https://stackoverflow.com',
    timeSpent: 11
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-12',
    timeAccessed: '05:19:58',
    url: 'https://github.com',
    timeSpent: 590
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-17',
    timeAccessed: '15:31:28',
    url: 'https://google.com',
    timeSpent: 595
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-28',
    timeAccessed: '09:49:57',
    url: 'https://example.com',
    timeSpent: 120
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-31',
    timeAccessed: '20:43:40',
    url: 'https://example.com',
    timeSpent: 416
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-26',
    timeAccessed: '11:49:24',
    url: 'https://stackoverflow.com',
    timeSpent: 468
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-30',
    timeAccessed: '16:26:54',
    url: 'https://wikipedia.org',
    timeSpent: 107
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-11',
    timeAccessed: '09:40:19',
    url: 'https://stackoverflow.com',
    timeSpent: 500
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-20',
    timeAccessed: '08:04:44',
    url: 'https://github.com',
    timeSpent: 429
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-04',
    timeAccessed: '13:12:11',
    url: 'https://google.com',
    timeSpent: 280
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-02',
    timeAccessed: '18:10:00',
    url: 'https://stackoverflow.com',
    timeSpent: 162
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-25',
    timeAccessed: '06:42:52',
    url: 'https://wikipedia.org',
    timeSpent: 546
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-09',
    timeAccessed: '07:18:43',
    url: 'https://wikipedia.org',
    timeSpent: 354
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-29',
    timeAccessed: '09:21:30',
    url: 'https://stackoverflow.com',
    timeSpent: 470
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-06',
    timeAccessed: '18:54:07',
    url: 'https://example.com',
    timeSpent: 88
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-06',
    timeAccessed: '08:29:42',
    url: 'https://stackoverflow.com',
    timeSpent: 457
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-09',
    timeAccessed: '00:38:13',
    url: 'https://github.com',
    timeSpent: 429
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-26',
    timeAccessed: '16:48:22',
    url: 'https://github.com',
    timeSpent: 25
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-23',
    timeAccessed: '20:11:26',
    url: 'https://example.com',
    timeSpent: 110
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-06',
    timeAccessed: '14:57:27',
    url: 'https://wikipedia.org',
    timeSpent: 216
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-15',
    timeAccessed: '11:47:17',
    url: 'https://github.com',
    timeSpent: 538
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-16',
    timeAccessed: '21:21:35',
    url: 'https://google.com',
    timeSpent: 406
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-14',
    timeAccessed: '13:37:50',
    url: 'https://wikipedia.org',
    timeSpent: 291
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-26',
    timeAccessed: '23:57:31',
    url: 'https://stackoverflow.com',
    timeSpent: 493
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-23',
    timeAccessed: '19:09:03',
    url: 'https://github.com',
    timeSpent: 26
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-22',
    timeAccessed: '03:21:34',
    url: 'https://example.com',
    timeSpent: 109
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-01',
    timeAccessed: '16:41:37',
    url: 'https://example.com',
    timeSpent: 376
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-29',
    timeAccessed: '08:45:00',
    url: 'https://wikipedia.org',
    timeSpent: 2
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-12',
    timeAccessed: '20:31:35',
    url: 'https://google.com',
    timeSpent: 270
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-08',
    timeAccessed: '18:39:06',
    url: 'https://google.com',
    timeSpent: 162
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-13',
    timeAccessed: '11:30:50',
    url: 'https://example.com',
    timeSpent: 353
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-15',
    timeAccessed: '16:07:58',
    url: 'https://example.com',
    timeSpent: 94
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-29',
    timeAccessed: '22:15:13',
    url: 'https://example.com',
    timeSpent: 91
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-30',
    timeAccessed: '01:13:50',
    url: 'https://github.com',
    timeSpent: 399
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-27',
    timeAccessed: '15:39:27',
    url: 'https://example.com',
    timeSpent: 433
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-25',
    timeAccessed: '10:07:33',
    url: 'https://wikipedia.org',
    timeSpent: 125
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-10',
    timeAccessed: '10:50:14',
    url: 'https://google.com',
    timeSpent: 205
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-26',
    timeAccessed: '06:15:40',
    url: 'https://google.com',
    timeSpent: 363
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-11',
    timeAccessed: '20:40:47',
    url: 'https://stackoverflow.com',
    timeSpent: 56
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-04',
    timeAccessed: '05:54:53',
    url: 'https://wikipedia.org',
    timeSpent: 554
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-14',
    timeAccessed: '00:56:32',
    url: 'https://stackoverflow.com',
    timeSpent: 302
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-21',
    timeAccessed: '05:31:19',
    url: 'https://github.com',
    timeSpent: 595
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-23',
    timeAccessed: '02:49:27',
    url: 'https://google.com',
    timeSpent: 202
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-04',
    timeAccessed: '10:24:18',
    url: 'https://github.com',
    timeSpent: 136
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-25',
    timeAccessed: '15:55:07',
    url: 'https://google.com',
    timeSpent: 40
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-19',
    timeAccessed: '18:11:28',
    url: 'https://github.com',
    timeSpent: 452
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-07',
    timeAccessed: '14:14:42',
    url: 'https://google.com',
    timeSpent: 588
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-30',
    timeAccessed: '16:13:44',
    url: 'https://stackoverflow.com',
    timeSpent: 310
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-09',
    timeAccessed: '20:07:24',
    url: 'https://wikipedia.org',
    timeSpent: 593
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-08',
    timeAccessed: '21:06:05',
    url: 'https://wikipedia.org',
    timeSpent: 2
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-25',
    timeAccessed: '00:51:57',
    url: 'https://example.com',
    timeSpent: 392
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-29',
    timeAccessed: '11:32:25',
    url: 'https://stackoverflow.com',
    timeSpent: 174
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-14',
    timeAccessed: '02:17:10',
    url: 'https://stackoverflow.com',
    timeSpent: 435
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-07',
    timeAccessed: '23:51:37',
    url: 'https://google.com',
    timeSpent: 391
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-03',
    timeAccessed: '19:47:36',
    url: 'https://stackoverflow.com',
    timeSpent: 124
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-30',
    timeAccessed: '01:00:43',
    url: 'https://stackoverflow.com',
    timeSpent: 437
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-05',
    timeAccessed: '12:24:30',
    url: 'https://google.com',
    timeSpent: 560
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-28',
    timeAccessed: '12:32:40',
    url: 'https://google.com',
    timeSpent: 366
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-19',
    timeAccessed: '09:18:37',
    url: 'https://github.com',
    timeSpent: 301
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-26',
    timeAccessed: '21:54:56',
    url: 'https://example.com',
    timeSpent: 402
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-29',
    timeAccessed: '12:39:33',
    url: 'https://github.com',
    timeSpent: 241
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-08',
    timeAccessed: '20:48:27',
    url: 'https://google.com',
    timeSpent: 519
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-18',
    timeAccessed: '18:13:26',
    url: 'https://github.com',
    timeSpent: 584
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-17',
    timeAccessed: '18:05:27',
    url: 'https://google.com',
    timeSpent: 461
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-01',
    timeAccessed: '06:22:05',
    url: 'https://stackoverflow.com',
    timeSpent: 558
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-25',
    timeAccessed: '04:15:01',
    url: 'https://stackoverflow.com',
    timeSpent: 491
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-11',
    timeAccessed: '02:18:43',
    url: 'https://stackoverflow.com',
    timeSpent: 97
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-04',
    timeAccessed: '06:50:47',
    url: 'https://github.com',
    timeSpent: 194
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-24',
    timeAccessed: '23:32:41',
    url: 'https://wikipedia.org',
    timeSpent: 548
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-12',
    timeAccessed: '08:28:59',
    url: 'https://example.com',
    timeSpent: 169
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-28',
    timeAccessed: '11:54:17',
    url: 'https://google.com',
    timeSpent: 599
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-07',
    timeAccessed: '03:45:18',
    url: 'https://google.com',
    timeSpent: 267
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-12',
    timeAccessed: '13:06:40',
    url: 'https://google.com',
    timeSpent: 284
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-15',
    timeAccessed: '18:21:16',
    url: 'https://stackoverflow.com',
    timeSpent: 337
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-24',
    timeAccessed: '15:18:05',
    url: 'https://example.com',
    timeSpent: 279
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-09',
    timeAccessed: '08:30:02',
    url: 'https://google.com',
    timeSpent: 581
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-31',
    timeAccessed: '17:02:48',
    url: 'https://example.com',
    timeSpent: 385
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-02',
    timeAccessed: '18:41:29',
    url: 'https://google.com',
    timeSpent: 309
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-02',
    timeAccessed: '10:51:16',
    url: 'https://example.com',
    timeSpent: 485
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-07',
    timeAccessed: '00:35:10',
    url: 'https://stackoverflow.com',
    timeSpent: 108
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-29',
    timeAccessed: '22:56:08',
    url: 'https://github.com',
    timeSpent: 362
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-04',
    timeAccessed: '23:50:13',
    url: 'https://google.com',
    timeSpent: 106
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-30',
    timeAccessed: '00:00:04',
    url: 'https://github.com',
    timeSpent: 39
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-06',
    timeAccessed: '05:40:08',
    url: 'https://github.com',
    timeSpent: 45
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-24',
    timeAccessed: '17:33:15',
    url: 'https://wikipedia.org',
    timeSpent: 361
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-30',
    timeAccessed: '09:50:33',
    url: 'https://stackoverflow.com',
    timeSpent: 165
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-20',
    timeAccessed: '05:55:20',
    url: 'https://example.com',
    timeSpent: 520
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-10',
    timeAccessed: '06:17:35',
    url: 'https://wikipedia.org',
    timeSpent: 58
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-23',
    timeAccessed: '03:48:21',
    url: 'https://github.com',
    timeSpent: 171
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-23',
    timeAccessed: '07:33:00',
    url: 'https://github.com',
    timeSpent: 392
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-19',
    timeAccessed: '21:48:30',
    url: 'https://stackoverflow.com',
    timeSpent: 488
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-19',
    timeAccessed: '09:07:53',
    url: 'https://wikipedia.org',
    timeSpent: 595
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-16',
    timeAccessed: '10:14:20',
    url: 'https://example.com',
    timeSpent: 41
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-25',
    timeAccessed: '04:33:13',
    url: 'https://stackoverflow.com',
    timeSpent: 119
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-12',
    timeAccessed: '06:49:21',
    url: 'https://stackoverflow.com',
    timeSpent: 202
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-11',
    timeAccessed: '14:41:34',
    url: 'https://google.com',
    timeSpent: 53
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-26',
    timeAccessed: '19:43:07',
    url: 'https://google.com',
    timeSpent: 152
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-01',
    timeAccessed: '18:48:02',
    url: 'https://example.com',
    timeSpent: 291
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-15',
    timeAccessed: '19:38:01',
    url: 'https://example.com',
    timeSpent: 106
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-30',
    timeAccessed: '23:05:39',
    url: 'https://example.com',
    timeSpent: 496
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-01',
    timeAccessed: '03:42:45',
    url: 'https://github.com',
    timeSpent: 54
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-30',
    timeAccessed: '08:58:08',
    url: 'https://github.com',
    timeSpent: 590
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-02',
    timeAccessed: '12:46:02',
    url: 'https://example.com',
    timeSpent: 191
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-21',
    timeAccessed: '10:52:16',
    url: 'https://stackoverflow.com',
    timeSpent: 319
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-15',
    timeAccessed: '21:01:47',
    url: 'https://wikipedia.org',
    timeSpent: 378
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-01',
    timeAccessed: '03:09:36',
    url: 'https://google.com',
    timeSpent: 454
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-29',
    timeAccessed: '10:01:40',
    url: 'https://stackoverflow.com',
    timeSpent: 598
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-22',
    timeAccessed: '11:18:12',
    url: 'https://stackoverflow.com',
    timeSpent: 87
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-20',
    timeAccessed: '00:22:15',
    url: 'https://github.com',
    timeSpent: 543
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-08',
    timeAccessed: '12:12:12',
    url: 'https://example.com',
    timeSpent: 272
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-12',
    timeAccessed: '09:54:24',
    url: 'https://stackoverflow.com',
    timeSpent: 425
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-23',
    timeAccessed: '21:10:00',
    url: 'https://wikipedia.org',
    timeSpent: 56
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-12',
    timeAccessed: '10:59:49',
    url: 'https://stackoverflow.com',
    timeSpent: 584
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-09',
    timeAccessed: '23:43:21',
    url: 'https://github.com',
    timeSpent: 442
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-12',
    timeAccessed: '05:11:46',
    url: 'https://stackoverflow.com',
    timeSpent: 125
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-26',
    timeAccessed: '06:18:59',
    url: 'https://google.com',
    timeSpent: 425
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-15',
    timeAccessed: '09:59:26',
    url: 'https://google.com',
    timeSpent: 215
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-28',
    timeAccessed: '20:08:08',
    url: 'https://stackoverflow.com',
    timeSpent: 276
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-15',
    timeAccessed: '06:58:33',
    url: 'https://github.com',
    timeSpent: 551
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-19',
    timeAccessed: '16:31:00',
    url: 'https://example.com',
    timeSpent: 274
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-07',
    timeAccessed: '06:45:59',
    url: 'https://stackoverflow.com',
    timeSpent: 563
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-04',
    timeAccessed: '06:17:09',
    url: 'https://github.com',
    timeSpent: 312
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-25',
    timeAccessed: '13:20:37',
    url: 'https://wikipedia.org',
    timeSpent: 271
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-23',
    timeAccessed: '12:31:27',
    url: 'https://github.com',
    timeSpent: 478
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-27',
    timeAccessed: '05:24:54',
    url: 'https://stackoverflow.com',
    timeSpent: 428
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-16',
    timeAccessed: '16:24:46',
    url: 'https://github.com',
    timeSpent: 265
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-29',
    timeAccessed: '08:56:41',
    url: 'https://example.com',
    timeSpent: 283
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-04',
    timeAccessed: '02:08:58',
    url: 'https://wikipedia.org',
    timeSpent: 445
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-12',
    timeAccessed: '13:25:50',
    url: 'https://wikipedia.org',
    timeSpent: 551
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-17',
    timeAccessed: '21:51:43',
    url: 'https://example.com',
    timeSpent: 590
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-29',
    timeAccessed: '16:52:20',
    url: 'https://wikipedia.org',
    timeSpent: 405
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-10',
    timeAccessed: '20:24:36',
    url: 'https://github.com',
    timeSpent: 406
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-25',
    timeAccessed: '04:29:45',
    url: 'https://google.com',
    timeSpent: 14
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-06',
    timeAccessed: '19:42:33',
    url: 'https://example.com',
    timeSpent: 102
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-17',
    timeAccessed: '06:54:42',
    url: 'https://wikipedia.org',
    timeSpent: 131
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-13',
    timeAccessed: '06:59:12',
    url: 'https://google.com',
    timeSpent: 112
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-16',
    timeAccessed: '02:48:55',
    url: 'https://example.com',
    timeSpent: 547
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-23',
    timeAccessed: '12:56:11',
    url: 'https://example.com',
    timeSpent: 504
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-07',
    timeAccessed: '18:51:07',
    url: 'https://google.com',
    timeSpent: 392
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-30',
    timeAccessed: '06:03:04',
    url: 'https://stackoverflow.com',
    timeSpent: 269
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-04',
    timeAccessed: '11:00:53',
    url: 'https://google.com',
    timeSpent: 304
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-13',
    timeAccessed: '02:24:54',
    url: 'https://github.com',
    timeSpent: 187
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-20',
    timeAccessed: '07:13:34',
    url: 'https://example.com',
    timeSpent: 434
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-16',
    timeAccessed: '00:42:08',
    url: 'https://stackoverflow.com',
    timeSpent: 335
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-15',
    timeAccessed: '23:13:09',
    url: 'https://google.com',
    timeSpent: 452
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-04',
    timeAccessed: '04:29:29',
    url: 'https://wikipedia.org',
    timeSpent: 498
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-19',
    timeAccessed: '10:47:46',
    url: 'https://google.com',
    timeSpent: 422
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-05',
    timeAccessed: '15:13:48',
    url: 'https://wikipedia.org',
    timeSpent: 467
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-21',
    timeAccessed: '12:34:48',
    url: 'https://wikipedia.org',
    timeSpent: 388
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-17',
    timeAccessed: '02:03:44',
    url: 'https://example.com',
    timeSpent: 335
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-05',
    timeAccessed: '12:54:19',
    url: 'https://stackoverflow.com',
    timeSpent: 274
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-29',
    timeAccessed: '00:09:58',
    url: 'https://wikipedia.org',
    timeSpent: 508
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-26',
    timeAccessed: '06:40:41',
    url: 'https://stackoverflow.com',
    timeSpent: 46
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-14',
    timeAccessed: '21:51:42',
    url: 'https://github.com',
    timeSpent: 362
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-24',
    timeAccessed: '02:46:25',
    url: 'https://github.com',
    timeSpent: 535
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-21',
    timeAccessed: '17:03:50',
    url: 'https://google.com',
    timeSpent: 458
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-28',
    timeAccessed: '19:57:06',
    url: 'https://example.com',
    timeSpent: 542
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-04',
    timeAccessed: '01:35:14',
    url: 'https://stackoverflow.com',
    timeSpent: 194
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-19',
    timeAccessed: '08:08:40',
    url: 'https://google.com',
    timeSpent: 64
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-27',
    timeAccessed: '17:34:22',
    url: 'https://wikipedia.org',
    timeSpent: 359
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-04',
    timeAccessed: '18:38:00',
    url: 'https://stackoverflow.com',
    timeSpent: 446
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-07',
    timeAccessed: '14:14:22',
    url: 'https://github.com',
    timeSpent: 228
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-02',
    timeAccessed: '09:36:14',
    url: 'https://stackoverflow.com',
    timeSpent: 469
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-20',
    timeAccessed: '15:54:04',
    url: 'https://example.com',
    timeSpent: 115
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-11',
    timeAccessed: '14:05:27',
    url: 'https://example.com',
    timeSpent: 361
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-23',
    timeAccessed: '13:06:34',
    url: 'https://wikipedia.org',
    timeSpent: 404
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-25',
    timeAccessed: '05:05:29',
    url: 'https://google.com',
    timeSpent: 69
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-18',
    timeAccessed: '13:07:30',
    url: 'https://example.com',
    timeSpent: 555
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-15',
    timeAccessed: '09:26:14',
    url: 'https://example.com',
    timeSpent: 3
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-13',
    timeAccessed: '20:58:28',
    url: 'https://google.com',
    timeSpent: 159
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-27',
    timeAccessed: '03:37:55',
    url: 'https://google.com',
    timeSpent: 196
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-26',
    timeAccessed: '05:48:41',
    url: 'https://github.com',
    timeSpent: 334
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-26',
    timeAccessed: '09:06:48',
    url: 'https://github.com',
    timeSpent: 505
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-14',
    timeAccessed: '04:42:19',
    url: 'https://wikipedia.org',
    timeSpent: 416
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-15',
    timeAccessed: '12:44:29',
    url: 'https://google.com',
    timeSpent: 294
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-03',
    timeAccessed: '08:47:45',
    url: 'https://wikipedia.org',
    timeSpent: 440
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-23',
    timeAccessed: '03:04:44',
    url: 'https://example.com',
    timeSpent: 333
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-14',
    timeAccessed: '12:30:19',
    url: 'https://example.com',
    timeSpent: 168
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-01',
    timeAccessed: '00:29:05',
    url: 'https://github.com',
    timeSpent: 125
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-14',
    timeAccessed: '20:51:52',
    url: 'https://google.com',
    timeSpent: 541
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-24',
    timeAccessed: '06:53:26',
    url: 'https://github.com',
    timeSpent: 338
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-11',
    timeAccessed: '16:46:52',
    url: 'https://wikipedia.org',
    timeSpent: 346
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-10',
    timeAccessed: '11:51:42',
    url: 'https://wikipedia.org',
    timeSpent: 440
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-26',
    timeAccessed: '03:17:10',
    url: 'https://github.com',
    timeSpent: 417
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-12',
    timeAccessed: '07:56:22',
    url: 'https://wikipedia.org',
    timeSpent: 398
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-07',
    timeAccessed: '05:15:18',
    url: 'https://example.com',
    timeSpent: 130
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-06',
    timeAccessed: '08:40:51',
    url: 'https://google.com',
    timeSpent: 49
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-17',
    timeAccessed: '22:00:20',
    url: 'https://github.com',
    timeSpent: 566
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-16',
    timeAccessed: '09:09:24',
    url: 'https://wikipedia.org',
    timeSpent: 223
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-03',
    timeAccessed: '22:48:55',
    url: 'https://stackoverflow.com',
    timeSpent: 25
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-28',
    timeAccessed: '09:37:49',
    url: 'https://google.com',
    timeSpent: 324
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-06',
    timeAccessed: '09:24:40',
    url: 'https://stackoverflow.com',
    timeSpent: 289
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-27',
    timeAccessed: '20:10:50',
    url: 'https://github.com',
    timeSpent: 150
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-19',
    timeAccessed: '08:58:54',
    url: 'https://github.com',
    timeSpent: 328
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-28',
    timeAccessed: '07:06:52',
    url: 'https://google.com',
    timeSpent: 570
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-10',
    timeAccessed: '07:10:12',
    url: 'https://wikipedia.org',
    timeSpent: 539
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-11',
    timeAccessed: '14:59:24',
    url: 'https://wikipedia.org',
    timeSpent: 527
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-10',
    timeAccessed: '11:30:53',
    url: 'https://wikipedia.org',
    timeSpent: 269
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-02',
    timeAccessed: '09:43:53',
    url: 'https://example.com',
    timeSpent: 359
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-14',
    timeAccessed: '14:50:08',
    url: 'https://example.com',
    timeSpent: 279
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-18',
    timeAccessed: '13:31:52',
    url: 'https://google.com',
    timeSpent: 413
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-17',
    timeAccessed: '17:33:35',
    url: 'https://github.com',
    timeSpent: 147
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-15',
    timeAccessed: '11:50:22',
    url: 'https://example.com',
    timeSpent: 504
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-23',
    timeAccessed: '04:06:08',
    url: 'https://wikipedia.org',
    timeSpent: 425
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-09',
    timeAccessed: '05:03:47',
    url: 'https://google.com',
    timeSpent: 284
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-10',
    timeAccessed: '01:14:31',
    url: 'https://wikipedia.org',
    timeSpent: 329
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-13',
    timeAccessed: '17:04:09',
    url: 'https://stackoverflow.com',
    timeSpent: 535
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-10',
    timeAccessed: '11:24:07',
    url: 'https://example.com',
    timeSpent: 110
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-01',
    timeAccessed: '17:16:49',
    url: 'https://github.com',
    timeSpent: 393
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-31',
    timeAccessed: '09:00:18',
    url: 'https://stackoverflow.com',
    timeSpent: 462
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-24',
    timeAccessed: '01:37:37',
    url: 'https://google.com',
    timeSpent: 166
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-18',
    timeAccessed: '19:16:07',
    url: 'https://github.com',
    timeSpent: 243
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-17',
    timeAccessed: '04:41:31',
    url: 'https://github.com',
    timeSpent: 303
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-09',
    timeAccessed: '01:08:00',
    url: 'https://stackoverflow.com',
    timeSpent: 224
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-02',
    timeAccessed: '12:44:07',
    url: 'https://github.com',
    timeSpent: 489
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-20',
    timeAccessed: '20:06:07',
    url: 'https://github.com',
    timeSpent: 387
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-20',
    timeAccessed: '11:14:36',
    url: 'https://wikipedia.org',
    timeSpent: 414
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-22',
    timeAccessed: '18:20:27',
    url: 'https://example.com',
    timeSpent: 577
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-16',
    timeAccessed: '07:44:04',
    url: 'https://github.com',
    timeSpent: 101
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-13',
    timeAccessed: '15:45:27',
    url: 'https://wikipedia.org',
    timeSpent: 468
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-10',
    timeAccessed: '02:40:23',
    url: 'https://github.com',
    timeSpent: 529
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-20',
    timeAccessed: '08:15:03',
    url: 'https://wikipedia.org',
    timeSpent: 266
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-31',
    timeAccessed: '01:39:01',
    url: 'https://stackoverflow.com',
    timeSpent: 400
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-19',
    timeAccessed: '11:33:59',
    url: 'https://example.com',
    timeSpent: 428
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-09',
    timeAccessed: '11:05:46',
    url: 'https://stackoverflow.com',
    timeSpent: 107
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-13',
    timeAccessed: '01:35:44',
    url: 'https://github.com',
    timeSpent: 511
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-12',
    timeAccessed: '16:48:41',
    url: 'https://stackoverflow.com',
    timeSpent: 458
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-17',
    timeAccessed: '03:58:21',
    url: 'https://example.com',
    timeSpent: 114
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-21',
    timeAccessed: '08:33:56',
    url: 'https://stackoverflow.com',
    timeSpent: 209
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-21',
    timeAccessed: '17:27:04',
    url: 'https://google.com',
    timeSpent: 282
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-28',
    timeAccessed: '22:40:43',
    url: 'https://github.com',
    timeSpent: 333
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-31',
    timeAccessed: '11:55:02',
    url: 'https://github.com',
    timeSpent: 391
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-17',
    timeAccessed: '08:49:57',
    url: 'https://github.com',
    timeSpent: 360
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-02',
    timeAccessed: '00:40:37',
    url: 'https://stackoverflow.com',
    timeSpent: 371
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-16',
    timeAccessed: '00:34:29',
    url: 'https://github.com',
    timeSpent: 590
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-23',
    timeAccessed: '05:33:56',
    url: 'https://stackoverflow.com',
    timeSpent: 47
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-14',
    timeAccessed: '16:56:00',
    url: 'https://github.com',
    timeSpent: 23
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-07',
    timeAccessed: '10:29:43',
    url: 'https://example.com',
    timeSpent: 147
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-26',
    timeAccessed: '14:14:23',
    url: 'https://stackoverflow.com',
    timeSpent: 345
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-24',
    timeAccessed: '05:59:10',
    url: 'https://example.com',
    timeSpent: 144
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-04',
    timeAccessed: '13:05:56',
    url: 'https://github.com',
    timeSpent: 436
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-21',
    timeAccessed: '09:08:42',
    url: 'https://example.com',
    timeSpent: 542
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-03',
    timeAccessed: '11:50:51',
    url: 'https://example.com',
    timeSpent: 456
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-14',
    timeAccessed: '06:50:17',
    url: 'https://example.com',
    timeSpent: 440
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-24',
    timeAccessed: '18:27:16',
    url: 'https://google.com',
    timeSpent: 394
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-05',
    timeAccessed: '02:37:28',
    url: 'https://wikipedia.org',
    timeSpent: 515
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-03',
    timeAccessed: '22:31:03',
    url: 'https://google.com',
    timeSpent: 299
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-30',
    timeAccessed: '19:01:40',
    url: 'https://github.com',
    timeSpent: 83
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-26',
    timeAccessed: '22:46:24',
    url: 'https://stackoverflow.com',
    timeSpent: 169
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-13',
    timeAccessed: '04:41:56',
    url: 'https://example.com',
    timeSpent: 575
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-27',
    timeAccessed: '13:34:49',
    url: 'https://google.com',
    timeSpent: 191
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-31',
    timeAccessed: '05:33:43',
    url: 'https://google.com',
    timeSpent: 33
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-07',
    timeAccessed: '14:41:35',
    url: 'https://example.com',
    timeSpent: 548
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-12',
    timeAccessed: '12:24:54',
    url: 'https://google.com',
    timeSpent: 324
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-10',
    timeAccessed: '04:48:14',
    url: 'https://github.com',
    timeSpent: 503
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-09',
    timeAccessed: '15:32:27',
    url: 'https://google.com',
    timeSpent: 577
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-14',
    timeAccessed: '11:09:02',
    url: 'https://github.com',
    timeSpent: 179
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-23',
    timeAccessed: '07:52:09',
    url: 'https://wikipedia.org',
    timeSpent: 242
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-07',
    timeAccessed: '17:24:50',
    url: 'https://wikipedia.org',
    timeSpent: 45
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-14',
    timeAccessed: '09:31:18',
    url: 'https://example.com',
    timeSpent: 85
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-22',
    timeAccessed: '12:24:55',
    url: 'https://google.com',
    timeSpent: 235
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-11',
    timeAccessed: '21:43:01',
    url: 'https://google.com',
    timeSpent: 250
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-28',
    timeAccessed: '05:32:57',
    url: 'https://github.com',
    timeSpent: 358
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-03',
    timeAccessed: '09:13:34',
    url: 'https://wikipedia.org',
    timeSpent: 583
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-03',
    timeAccessed: '19:28:49',
    url: 'https://github.com',
    timeSpent: 327
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-30',
    timeAccessed: '05:54:25',
    url: 'https://google.com',
    timeSpent: 319
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-10',
    timeAccessed: '11:03:12',
    url: 'https://wikipedia.org',
    timeSpent: 26
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-23',
    timeAccessed: '04:41:20',
    url: 'https://stackoverflow.com',
    timeSpent: 244
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-16',
    timeAccessed: '22:50:41',
    url: 'https://wikipedia.org',
    timeSpent: 439
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-03',
    timeAccessed: '15:15:06',
    url: 'https://stackoverflow.com',
    timeSpent: 407
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-19',
    timeAccessed: '18:57:30',
    url: 'https://example.com',
    timeSpent: 495
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-26',
    timeAccessed: '00:05:29',
    url: 'https://wikipedia.org',
    timeSpent: 91
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-20',
    timeAccessed: '03:03:35',
    url: 'https://google.com',
    timeSpent: 477
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-15',
    timeAccessed: '06:36:15',
    url: 'https://google.com',
    timeSpent: 458
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-29',
    timeAccessed: '01:54:52',
    url: 'https://stackoverflow.com',
    timeSpent: 443
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-09',
    timeAccessed: '18:20:07',
    url: 'https://stackoverflow.com',
    timeSpent: 344
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-09',
    timeAccessed: '02:11:41',
    url: 'https://stackoverflow.com',
    timeSpent: 347
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-19',
    timeAccessed: '16:40:12',
    url: 'https://example.com',
    timeSpent: 356
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-13',
    timeAccessed: '05:04:50',
    url: 'https://example.com',
    timeSpent: 370
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-09',
    timeAccessed: '02:06:28',
    url: 'https://stackoverflow.com',
    timeSpent: 589
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-13',
    timeAccessed: '03:37:49',
    url: 'https://github.com',
    timeSpent: 52
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-06',
    timeAccessed: '07:17:22',
    url: 'https://wikipedia.org',
    timeSpent: 284
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-29',
    timeAccessed: '00:03:22',
    url: 'https://github.com',
    timeSpent: 533
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-11',
    timeAccessed: '18:47:29',
    url: 'https://github.com',
    timeSpent: 8
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-02',
    timeAccessed: '04:27:23',
    url: 'https://wikipedia.org',
    timeSpent: 46
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-29',
    timeAccessed: '10:51:13',
    url: 'https://example.com',
    timeSpent: 178
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-29',
    timeAccessed: '08:54:46',
    url: 'https://example.com',
    timeSpent: 57
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-25',
    timeAccessed: '09:55:37',
    url: 'https://wikipedia.org',
    timeSpent: 588
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-14',
    timeAccessed: '09:48:03',
    url: 'https://github.com',
    timeSpent: 72
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-07',
    timeAccessed: '21:16:13',
    url: 'https://stackoverflow.com',
    timeSpent: 285
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-25',
    timeAccessed: '00:55:36',
    url: 'https://wikipedia.org',
    timeSpent: 351
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-09',
    timeAccessed: '04:03:46',
    url: 'https://github.com',
    timeSpent: 336
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-03',
    timeAccessed: '22:50:16',
    url: 'https://github.com',
    timeSpent: 45
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-19',
    timeAccessed: '09:40:28',
    url: 'https://example.com',
    timeSpent: 417
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-25',
    timeAccessed: '12:40:28',
    url: 'https://example.com',
    timeSpent: 52
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-25',
    timeAccessed: '13:15:08',
    url: 'https://wikipedia.org',
    timeSpent: 559
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-30',
    timeAccessed: '17:35:10',
    url: 'https://google.com',
    timeSpent: 257
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-29',
    timeAccessed: '07:00:25',
    url: 'https://wikipedia.org',
    timeSpent: 412
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-25',
    timeAccessed: '18:31:46',
    url: 'https://stackoverflow.com',
    timeSpent: 580
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-31',
    timeAccessed: '00:04:14',
    url: 'https://example.com',
    timeSpent: 87
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-11',
    timeAccessed: '22:21:09',
    url: 'https://example.com',
    timeSpent: 220
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-01',
    timeAccessed: '01:05:26',
    url: 'https://github.com',
    timeSpent: 185
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-03',
    timeAccessed: '15:34:05',
    url: 'https://wikipedia.org',
    timeSpent: 213
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-01',
    timeAccessed: '03:05:05',
    url: 'https://github.com',
    timeSpent: 247
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-15',
    timeAccessed: '15:14:38',
    url: 'https://stackoverflow.com',
    timeSpent: 63
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-24',
    timeAccessed: '09:27:43',
    url: 'https://stackoverflow.com',
    timeSpent: 411
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-10',
    timeAccessed: '13:38:09',
    url: 'https://wikipedia.org',
    timeSpent: 209
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-26',
    timeAccessed: '06:36:49',
    url: 'https://github.com',
    timeSpent: 536
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-18',
    timeAccessed: '19:15:46',
    url: 'https://stackoverflow.com',
    timeSpent: 433
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-04',
    timeAccessed: '10:11:43',
    url: 'https://google.com',
    timeSpent: 523
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-21',
    timeAccessed: '19:26:45',
    url: 'https://example.com',
    timeSpent: 516
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-25',
    timeAccessed: '22:55:30',
    url: 'https://github.com',
    timeSpent: 482
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-10',
    timeAccessed: '11:10:59',
    url: 'https://example.com',
    timeSpent: 455
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-08',
    timeAccessed: '03:09:07',
    url: 'https://stackoverflow.com',
    timeSpent: 270
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-24',
    timeAccessed: '00:17:38',
    url: 'https://google.com',
    timeSpent: 542
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-22',
    timeAccessed: '18:59:46',
    url: 'https://wikipedia.org',
    timeSpent: 566
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-11',
    timeAccessed: '14:19:08',
    url: 'https://github.com',
    timeSpent: 207
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-21',
    timeAccessed: '21:16:11',
    url: 'https://stackoverflow.com',
    timeSpent: 208
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-12',
    timeAccessed: '19:42:49',
    url: 'https://stackoverflow.com',
    timeSpent: 53
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-21',
    timeAccessed: '06:28:00',
    url: 'https://github.com',
    timeSpent: 115
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-06',
    timeAccessed: '04:32:39',
    url: 'https://google.com',
    timeSpent: 411
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-17',
    timeAccessed: '02:10:48',
    url: 'https://github.com',
    timeSpent: 395
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-20',
    timeAccessed: '22:26:35',
    url: 'https://stackoverflow.com',
    timeSpent: 45
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-09',
    timeAccessed: '10:21:15',
    url: 'https://stackoverflow.com',
    timeSpent: 317
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-25',
    timeAccessed: '17:31:28',
    url: 'https://github.com',
    timeSpent: 599
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-20',
    timeAccessed: '02:42:18',
    url: 'https://example.com',
    timeSpent: 229
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-06',
    timeAccessed: '01:31:23',
    url: 'https://example.com',
    timeSpent: 486
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-23',
    timeAccessed: '01:38:06',
    url: 'https://example.com',
    timeSpent: 439
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-18',
    timeAccessed: '08:18:25',
    url: 'https://wikipedia.org',
    timeSpent: 268
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-30',
    timeAccessed: '10:54:41',
    url: 'https://github.com',
    timeSpent: 476
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-19',
    timeAccessed: '15:09:46',
    url: 'https://google.com',
    timeSpent: 240
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-04',
    timeAccessed: '23:38:37',
    url: 'https://google.com',
    timeSpent: 311
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-16',
    timeAccessed: '03:10:25',
    url: 'https://google.com',
    timeSpent: 423
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-26',
    timeAccessed: '22:57:44',
    url: 'https://example.com',
    timeSpent: 503
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-28',
    timeAccessed: '16:36:02',
    url: 'https://github.com',
    timeSpent: 118
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-18',
    timeAccessed: '06:24:52',
    url: 'https://example.com',
    timeSpent: 477
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-06',
    timeAccessed: '12:09:59',
    url: 'https://github.com',
    timeSpent: 106
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-10',
    timeAccessed: '00:19:21',
    url: 'https://github.com',
    timeSpent: 293
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-16',
    timeAccessed: '04:16:15',
    url: 'https://example.com',
    timeSpent: 555
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-03',
    timeAccessed: '05:24:56',
    url: 'https://wikipedia.org',
    timeSpent: 474
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-21',
    timeAccessed: '23:05:44',
    url: 'https://google.com',
    timeSpent: 139
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-18',
    timeAccessed: '10:40:48',
    url: 'https://github.com',
    timeSpent: 514
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-26',
    timeAccessed: '12:35:19',
    url: 'https://google.com',
    timeSpent: 394
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-26',
    timeAccessed: '18:28:54',
    url: 'https://example.com',
    timeSpent: 308
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-30',
    timeAccessed: '13:23:16',
    url: 'https://github.com',
    timeSpent: 461
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-12',
    timeAccessed: '16:11:00',
    url: 'https://github.com',
    timeSpent: 159
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-20',
    timeAccessed: '22:22:45',
    url: 'https://example.com',
    timeSpent: 584
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-29',
    timeAccessed: '21:28:14',
    url: 'https://github.com',
    timeSpent: 73
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-11',
    timeAccessed: '01:48:59',
    url: 'https://google.com',
    timeSpent: 343
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-15',
    timeAccessed: '09:38:50',
    url: 'https://google.com',
    timeSpent: 577
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-25',
    timeAccessed: '17:38:50',
    url: 'https://github.com',
    timeSpent: 298
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-05',
    timeAccessed: '04:47:51',
    url: 'https://stackoverflow.com',
    timeSpent: 81
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-16',
    timeAccessed: '19:45:02',
    url: 'https://wikipedia.org',
    timeSpent: 124
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-26',
    timeAccessed: '01:52:27',
    url: 'https://wikipedia.org',
    timeSpent: 477
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-08',
    timeAccessed: '17:03:34',
    url: 'https://google.com',
    timeSpent: 306
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-18',
    timeAccessed: '23:41:23',
    url: 'https://google.com',
    timeSpent: 516
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-08',
    timeAccessed: '15:22:49',
    url: 'https://example.com',
    timeSpent: 205
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-09',
    timeAccessed: '17:45:09',
    url: 'https://example.com',
    timeSpent: 259
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-25',
    timeAccessed: '09:43:32',
    url: 'https://example.com',
    timeSpent: 420
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-10',
    timeAccessed: '05:28:30',
    url: 'https://wikipedia.org',
    timeSpent: 11
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-19',
    timeAccessed: '19:18:17',
    url: 'https://wikipedia.org',
    timeSpent: 522
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-16',
    timeAccessed: '17:25:10',
    url: 'https://example.com',
    timeSpent: 273
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-12',
    timeAccessed: '09:53:51',
    url: 'https://stackoverflow.com',
    timeSpent: 127
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-03',
    timeAccessed: '04:40:48',
    url: 'https://example.com',
    timeSpent: 566
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-15',
    timeAccessed: '18:25:36',
    url: 'https://google.com',
    timeSpent: 306
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-16',
    timeAccessed: '11:59:16',
    url: 'https://example.com',
    timeSpent: 525
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-27',
    timeAccessed: '11:15:42',
    url: 'https://google.com',
    timeSpent: 504
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-31',
    timeAccessed: '16:55:37',
    url: 'https://wikipedia.org',
    timeSpent: 371
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-13',
    timeAccessed: '03:41:40',
    url: 'https://github.com',
    timeSpent: 210
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-19',
    timeAccessed: '10:31:06',
    url: 'https://github.com',
    timeSpent: 185
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-10',
    timeAccessed: '21:10:10',
    url: 'https://wikipedia.org',
    timeSpent: 466
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-28',
    timeAccessed: '08:27:49',
    url: 'https://stackoverflow.com',
    timeSpent: 197
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-04',
    timeAccessed: '03:51:00',
    url: 'https://stackoverflow.com',
    timeSpent: 388
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-10',
    timeAccessed: '00:21:47',
    url: 'https://google.com',
    timeSpent: 152
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-12',
    timeAccessed: '00:35:52',
    url: 'https://example.com',
    timeSpent: 259
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-22',
    timeAccessed: '20:55:12',
    url: 'https://google.com',
    timeSpent: 351
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-06',
    timeAccessed: '10:22:27',
    url: 'https://example.com',
    timeSpent: 273
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-12',
    timeAccessed: '17:22:14',
    url: 'https://stackoverflow.com',
    timeSpent: 506
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-12',
    timeAccessed: '05:53:09',
    url: 'https://google.com',
    timeSpent: 270
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-12',
    timeAccessed: '02:46:34',
    url: 'https://stackoverflow.com',
    timeSpent: 11
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-21',
    timeAccessed: '09:38:26',
    url: 'https://google.com',
    timeSpent: 474
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-11',
    timeAccessed: '02:30:18',
    url: 'https://google.com',
    timeSpent: 513
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-01',
    timeAccessed: '09:18:15',
    url: 'https://github.com',
    timeSpent: 575
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-18',
    timeAccessed: '15:25:25',
    url: 'https://stackoverflow.com',
    timeSpent: 401
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-19',
    timeAccessed: '17:49:24',
    url: 'https://wikipedia.org',
    timeSpent: 157
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-26',
    timeAccessed: '14:20:37',
    url: 'https://example.com',
    timeSpent: 257
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-30',
    timeAccessed: '10:54:22',
    url: 'https://github.com',
    timeSpent: 359
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-23',
    timeAccessed: '04:31:08',
    url: 'https://stackoverflow.com',
    timeSpent: 502
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-08',
    timeAccessed: '14:07:35',
    url: 'https://wikipedia.org',
    timeSpent: 248
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-21',
    timeAccessed: '07:50:05',
    url: 'https://github.com',
    timeSpent: 193
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-28',
    timeAccessed: '21:31:11',
    url: 'https://google.com',
    timeSpent: 521
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-07',
    timeAccessed: '01:20:57',
    url: 'https://github.com',
    timeSpent: 449
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-06',
    timeAccessed: '17:17:07',
    url: 'https://example.com',
    timeSpent: 471
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-20',
    timeAccessed: '15:08:17',
    url: 'https://google.com',
    timeSpent: 163
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-16',
    timeAccessed: '16:48:34',
    url: 'https://github.com',
    timeSpent: 451
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-26',
    timeAccessed: '16:45:05',
    url: 'https://wikipedia.org',
    timeSpent: 508
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-01',
    timeAccessed: '23:34:26',
    url: 'https://github.com',
    timeSpent: 212
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-22',
    timeAccessed: '18:34:37',
    url: 'https://wikipedia.org',
    timeSpent: 141
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-15',
    timeAccessed: '00:51:47',
    url: 'https://stackoverflow.com',
    timeSpent: 187
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-27',
    timeAccessed: '07:45:43',
    url: 'https://stackoverflow.com',
    timeSpent: 431
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-13',
    timeAccessed: '10:14:58',
    url: 'https://stackoverflow.com',
    timeSpent: 359
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-21',
    timeAccessed: '16:26:42',
    url: 'https://example.com',
    timeSpent: 277
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-05',
    timeAccessed: '03:57:24',
    url: 'https://wikipedia.org',
    timeSpent: 555
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-11',
    timeAccessed: '07:04:17',
    url: 'https://example.com',
    timeSpent: 233
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-07',
    timeAccessed: '23:46:54',
    url: 'https://google.com',
    timeSpent: 449
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-23',
    timeAccessed: '11:34:18',
    url: 'https://google.com',
    timeSpent: 334
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-28',
    timeAccessed: '20:25:46',
    url: 'https://stackoverflow.com',
    timeSpent: 536
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-23',
    timeAccessed: '09:47:22',
    url: 'https://stackoverflow.com',
    timeSpent: 351
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-12',
    timeAccessed: '13:16:20',
    url: 'https://example.com',
    timeSpent: 2
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-18',
    timeAccessed: '04:53:58',
    url: 'https://google.com',
    timeSpent: 443
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-07',
    timeAccessed: '09:28:42',
    url: 'https://wikipedia.org',
    timeSpent: 298
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-19',
    timeAccessed: '20:44:46',
    url: 'https://google.com',
    timeSpent: 103
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-09',
    timeAccessed: '02:01:41',
    url: 'https://github.com',
    timeSpent: 211
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-05',
    timeAccessed: '13:26:28',
    url: 'https://stackoverflow.com',
    timeSpent: 498
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-30',
    timeAccessed: '20:28:50',
    url: 'https://wikipedia.org',
    timeSpent: 14
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-22',
    timeAccessed: '00:57:09',
    url: 'https://stackoverflow.com',
    timeSpent: 463
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-21',
    timeAccessed: '18:41:21',
    url: 'https://google.com',
    timeSpent: 384
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-12',
    timeAccessed: '13:03:38',
    url: 'https://wikipedia.org',
    timeSpent: 510
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-18',
    timeAccessed: '16:57:53',
    url: 'https://wikipedia.org',
    timeSpent: 46
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-30',
    timeAccessed: '11:05:52',
    url: 'https://stackoverflow.com',
    timeSpent: 64
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-27',
    timeAccessed: '01:03:11',
    url: 'https://github.com',
    timeSpent: 131
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-04',
    timeAccessed: '00:02:48',
    url: 'https://stackoverflow.com',
    timeSpent: 462
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-26',
    timeAccessed: '03:01:08',
    url: 'https://stackoverflow.com',
    timeSpent: 452
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-22',
    timeAccessed: '13:01:45',
    url: 'https://stackoverflow.com',
    timeSpent: 553
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-17',
    timeAccessed: '20:52:12',
    url: 'https://wikipedia.org',
    timeSpent: 120
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-06',
    timeAccessed: '21:53:48',
    url: 'https://wikipedia.org',
    timeSpent: 331
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-13',
    timeAccessed: '09:38:32',
    url: 'https://example.com',
    timeSpent: 116
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-11',
    timeAccessed: '23:31:15',
    url: 'https://github.com',
    timeSpent: 579
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-17',
    timeAccessed: '03:42:26',
    url: 'https://example.com',
    timeSpent: 162
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-26',
    timeAccessed: '03:45:27',
    url: 'https://example.com',
    timeSpent: 539
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-30',
    timeAccessed: '20:57:59',
    url: 'https://github.com',
    timeSpent: 339
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-23',
    timeAccessed: '11:11:23',
    url: 'https://google.com',
    timeSpent: 64
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-18',
    timeAccessed: '13:54:50',
    url: 'https://github.com',
    timeSpent: 290
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-24',
    timeAccessed: '13:52:17',
    url: 'https://github.com',
    timeSpent: 496
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-29',
    timeAccessed: '00:06:14',
    url: 'https://github.com',
    timeSpent: 159
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-08',
    timeAccessed: '03:13:00',
    url: 'https://google.com',
    timeSpent: 229
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-17',
    timeAccessed: '01:55:24',
    url: 'https://wikipedia.org',
    timeSpent: 38
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-14',
    timeAccessed: '19:42:14',
    url: 'https://stackoverflow.com',
    timeSpent: 498
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-13',
    timeAccessed: '16:24:58',
    url: 'https://example.com',
    timeSpent: 53
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-26',
    timeAccessed: '00:18:08',
    url: 'https://wikipedia.org',
    timeSpent: 8
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-11',
    timeAccessed: '11:07:48',
    url: 'https://github.com',
    timeSpent: 369
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-14',
    timeAccessed: '15:22:39',
    url: 'https://example.com',
    timeSpent: 317
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-10',
    timeAccessed: '19:04:01',
    url: 'https://wikipedia.org',
    timeSpent: 140
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-07',
    timeAccessed: '21:27:38',
    url: 'https://github.com',
    timeSpent: 533
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-12',
    timeAccessed: '16:41:54',
    url: 'https://example.com',
    timeSpent: 216
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-17',
    timeAccessed: '22:14:54',
    url: 'https://google.com',
    timeSpent: 395
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-12',
    timeAccessed: '16:03:19',
    url: 'https://github.com',
    timeSpent: 548
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-25',
    timeAccessed: '05:43:41',
    url: 'https://github.com',
    timeSpent: 363
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-25',
    timeAccessed: '00:18:38',
    url: 'https://stackoverflow.com',
    timeSpent: 514
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-02',
    timeAccessed: '22:28:21',
    url: 'https://github.com',
    timeSpent: 187
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-18',
    timeAccessed: '04:41:07',
    url: 'https://stackoverflow.com',
    timeSpent: 558
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-08',
    timeAccessed: '05:35:11',
    url: 'https://wikipedia.org',
    timeSpent: 587
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-17',
    timeAccessed: '16:08:27',
    url: 'https://wikipedia.org',
    timeSpent: 108
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-15',
    timeAccessed: '23:35:02',
    url: 'https://google.com',
    timeSpent: 291
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-05',
    timeAccessed: '02:01:12',
    url: 'https://example.com',
    timeSpent: 395
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-23',
    timeAccessed: '08:00:51',
    url: 'https://example.com',
    timeSpent: 572
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-07',
    timeAccessed: '05:46:17',
    url: 'https://example.com',
    timeSpent: 370
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-07',
    timeAccessed: '19:44:24',
    url: 'https://example.com',
    timeSpent: 496
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-21',
    timeAccessed: '13:52:33',
    url: 'https://stackoverflow.com',
    timeSpent: 175
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-28',
    timeAccessed: '06:03:38',
    url: 'https://google.com',
    timeSpent: 577
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-25',
    timeAccessed: '12:30:08',
    url: 'https://wikipedia.org',
    timeSpent: 311
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-22',
    timeAccessed: '12:43:55',
    url: 'https://wikipedia.org',
    timeSpent: 290
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-26',
    timeAccessed: '04:30:03',
    url: 'https://google.com',
    timeSpent: 133
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-23',
    timeAccessed: '14:23:23',
    url: 'https://example.com',
    timeSpent: 265
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-21',
    timeAccessed: '18:58:42',
    url: 'https://example.com',
    timeSpent: 193
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-22',
    timeAccessed: '02:11:14',
    url: 'https://wikipedia.org',
    timeSpent: 324
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-14',
    timeAccessed: '03:32:40',
    url: 'https://wikipedia.org',
    timeSpent: 169
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-16',
    timeAccessed: '20:53:08',
    url: 'https://example.com',
    timeSpent: 187
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-21',
    timeAccessed: '23:05:23',
    url: 'https://wikipedia.org',
    timeSpent: 219
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-02',
    timeAccessed: '23:14:49',
    url: 'https://wikipedia.org',
    timeSpent: 131
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-12',
    timeAccessed: '14:10:23',
    url: 'https://google.com',
    timeSpent: 580
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-17',
    timeAccessed: '09:19:06',
    url: 'https://example.com',
    timeSpent: 470
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-04',
    timeAccessed: '02:39:28',
    url: 'https://github.com',
    timeSpent: 30
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-10',
    timeAccessed: '21:14:05',
    url: 'https://example.com',
    timeSpent: 597
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-27',
    timeAccessed: '04:15:57',
    url: 'https://stackoverflow.com',
    timeSpent: 491
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-06',
    timeAccessed: '15:19:14',
    url: 'https://google.com',
    timeSpent: 66
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-11',
    timeAccessed: '21:49:50',
    url: 'https://stackoverflow.com',
    timeSpent: 490
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-29',
    timeAccessed: '05:18:39',
    url: 'https://google.com',
    timeSpent: 33
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-04',
    timeAccessed: '05:29:36',
    url: 'https://stackoverflow.com',
    timeSpent: 102
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-07',
    timeAccessed: '23:43:30',
    url: 'https://github.com',
    timeSpent: 226
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-18',
    timeAccessed: '07:09:32',
    url: 'https://github.com',
    timeSpent: 567
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-02',
    timeAccessed: '07:31:27',
    url: 'https://wikipedia.org',
    timeSpent: 349
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-30',
    timeAccessed: '20:13:25',
    url: 'https://example.com',
    timeSpent: 177
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-08',
    timeAccessed: '00:28:17',
    url: 'https://example.com',
    timeSpent: 527
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-14',
    timeAccessed: '22:17:39',
    url: 'https://github.com',
    timeSpent: 529
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-30',
    timeAccessed: '17:48:01',
    url: 'https://github.com',
    timeSpent: 156
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-02',
    timeAccessed: '14:51:07',
    url: 'https://google.com',
    timeSpent: 7
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-19',
    timeAccessed: '10:41:06',
    url: 'https://stackoverflow.com',
    timeSpent: 191
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-15',
    timeAccessed: '08:58:17',
    url: 'https://stackoverflow.com',
    timeSpent: 47
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-27',
    timeAccessed: '09:56:50',
    url: 'https://stackoverflow.com',
    timeSpent: 418
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-04',
    timeAccessed: '12:41:23',
    url: 'https://example.com',
    timeSpent: 302
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-06',
    timeAccessed: '23:43:05',
    url: 'https://google.com',
    timeSpent: 210
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-19',
    timeAccessed: '09:57:44',
    url: 'https://github.com',
    timeSpent: 407
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-26',
    timeAccessed: '17:59:30',
    url: 'https://example.com',
    timeSpent: 589
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-01',
    timeAccessed: '14:35:35',
    url: 'https://stackoverflow.com',
    timeSpent: 269
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-02',
    timeAccessed: '23:55:34',
    url: 'https://example.com',
    timeSpent: 72
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-07',
    timeAccessed: '10:58:18',
    url: 'https://example.com',
    timeSpent: 90
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-13',
    timeAccessed: '13:12:03',
    url: 'https://wikipedia.org',
    timeSpent: 262
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-01',
    timeAccessed: '00:49:26',
    url: 'https://stackoverflow.com',
    timeSpent: 108
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-15',
    timeAccessed: '09:36:06',
    url: 'https://github.com',
    timeSpent: 253
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-06',
    timeAccessed: '06:35:43',
    url: 'https://example.com',
    timeSpent: 111
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-13',
    timeAccessed: '14:47:04',
    url: 'https://github.com',
    timeSpent: 469
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-06',
    timeAccessed: '21:05:37',
    url: 'https://example.com',
    timeSpent: 411
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-13',
    timeAccessed: '06:33:55',
    url: 'https://example.com',
    timeSpent: 439
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-15',
    timeAccessed: '15:27:37',
    url: 'https://github.com',
    timeSpent: 45
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-31',
    timeAccessed: '12:21:35',
    url: 'https://stackoverflow.com',
    timeSpent: 439
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-18',
    timeAccessed: '19:21:34',
    url: 'https://wikipedia.org',
    timeSpent: 111
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-23',
    timeAccessed: '12:33:54',
    url: 'https://stackoverflow.com',
    timeSpent: 590
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-12',
    timeAccessed: '00:57:57',
    url: 'https://example.com',
    timeSpent: 279
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-21',
    timeAccessed: '05:40:20',
    url: 'https://wikipedia.org',
    timeSpent: 533
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-02',
    timeAccessed: '05:43:59',
    url: 'https://example.com',
    timeSpent: 344
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-28',
    timeAccessed: '16:50:45',
    url: 'https://github.com',
    timeSpent: 162
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-26',
    timeAccessed: '06:07:36',
    url: 'https://wikipedia.org',
    timeSpent: 521
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-28',
    timeAccessed: '23:33:19',
    url: 'https://example.com',
    timeSpent: 60
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-19',
    timeAccessed: '15:33:14',
    url: 'https://stackoverflow.com',
    timeSpent: 335
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-26',
    timeAccessed: '15:24:46',
    url: 'https://wikipedia.org',
    timeSpent: 535
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-10',
    timeAccessed: '09:38:25',
    url: 'https://github.com',
    timeSpent: 321
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-21',
    timeAccessed: '15:06:19',
    url: 'https://github.com',
    timeSpent: 164
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-18',
    timeAccessed: '09:28:15',
    url: 'https://google.com',
    timeSpent: 197
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-31',
    timeAccessed: '05:50:42',
    url: 'https://stackoverflow.com',
    timeSpent: 125
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-05',
    timeAccessed: '23:24:13',
    url: 'https://wikipedia.org',
    timeSpent: 279
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-02',
    timeAccessed: '03:30:06',
    url: 'https://wikipedia.org',
    timeSpent: 168
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-22',
    timeAccessed: '11:02:20',
    url: 'https://google.com',
    timeSpent: 416
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-13',
    timeAccessed: '18:10:25',
    url: 'https://google.com',
    timeSpent: 573
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-25',
    timeAccessed: '22:24:47',
    url: 'https://wikipedia.org',
    timeSpent: 166
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-17',
    timeAccessed: '22:42:34',
    url: 'https://google.com',
    timeSpent: 504
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-25',
    timeAccessed: '06:09:59',
    url: 'https://example.com',
    timeSpent: 217
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-23',
    timeAccessed: '01:02:06',
    url: 'https://example.com',
    timeSpent: 211
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-13',
    timeAccessed: '06:29:21',
    url: 'https://wikipedia.org',
    timeSpent: 266
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-25',
    timeAccessed: '22:45:26',
    url: 'https://github.com',
    timeSpent: 115
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-10',
    timeAccessed: '12:24:25',
    url: 'https://stackoverflow.com',
    timeSpent: 198
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-16',
    timeAccessed: '22:25:25',
    url: 'https://stackoverflow.com',
    timeSpent: 144
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-11',
    timeAccessed: '21:48:51',
    url: 'https://wikipedia.org',
    timeSpent: 314
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-09',
    timeAccessed: '04:23:43',
    url: 'https://example.com',
    timeSpent: 304
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-16',
    timeAccessed: '01:15:14',
    url: 'https://example.com',
    timeSpent: 97
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-22',
    timeAccessed: '10:11:30',
    url: 'https://wikipedia.org',
    timeSpent: 59
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-31',
    timeAccessed: '01:14:38',
    url: 'https://github.com',
    timeSpent: 371
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-12',
    timeAccessed: '09:44:43',
    url: 'https://wikipedia.org',
    timeSpent: 356
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-18',
    timeAccessed: '11:54:01',
    url: 'https://github.com',
    timeSpent: 168
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-04',
    timeAccessed: '09:00:11',
    url: 'https://example.com',
    timeSpent: 471
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-14',
    timeAccessed: '08:56:26',
    url: 'https://google.com',
    timeSpent: 439
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-20',
    timeAccessed: '00:56:05',
    url: 'https://example.com',
    timeSpent: 508
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-21',
    timeAccessed: '00:35:47',
    url: 'https://stackoverflow.com',
    timeSpent: 296
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-20',
    timeAccessed: '20:21:28',
    url: 'https://example.com',
    timeSpent: 298
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-18',
    timeAccessed: '03:46:08',
    url: 'https://stackoverflow.com',
    timeSpent: 464
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-15',
    timeAccessed: '03:46:40',
    url: 'https://github.com',
    timeSpent: 176
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-06',
    timeAccessed: '02:55:38',
    url: 'https://stackoverflow.com',
    timeSpent: 266
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-03',
    timeAccessed: '19:35:37',
    url: 'https://google.com',
    timeSpent: 245
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-12',
    timeAccessed: '05:49:12',
    url: 'https://github.com',
    timeSpent: 386
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-09',
    timeAccessed: '10:39:23',
    url: 'https://stackoverflow.com',
    timeSpent: 25
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-13',
    timeAccessed: '16:58:22',
    url: 'https://wikipedia.org',
    timeSpent: 294
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-07',
    timeAccessed: '00:12:27',
    url: 'https://example.com',
    timeSpent: 105
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-03',
    timeAccessed: '20:46:04',
    url: 'https://github.com',
    timeSpent: 572
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-17',
    timeAccessed: '19:21:47',
    url: 'https://example.com',
    timeSpent: 447
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-23',
    timeAccessed: '06:58:07',
    url: 'https://stackoverflow.com',
    timeSpent: 518
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-23',
    timeAccessed: '02:33:43',
    url: 'https://wikipedia.org',
    timeSpent: 345
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-28',
    timeAccessed: '23:50:25',
    url: 'https://stackoverflow.com',
    timeSpent: 587
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-02',
    timeAccessed: '01:20:46',
    url: 'https://wikipedia.org',
    timeSpent: 507
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-30',
    timeAccessed: '15:27:47',
    url: 'https://google.com',
    timeSpent: 422
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-09',
    timeAccessed: '18:25:58',
    url: 'https://stackoverflow.com',
    timeSpent: 510
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-10',
    timeAccessed: '22:11:58',
    url: 'https://github.com',
    timeSpent: 485
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-06',
    timeAccessed: '06:53:09',
    url: 'https://wikipedia.org',
    timeSpent: 75
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-07',
    timeAccessed: '02:49:29',
    url: 'https://google.com',
    timeSpent: 21
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-18',
    timeAccessed: '12:09:36',
    url: 'https://google.com',
    timeSpent: 400
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-11',
    timeAccessed: '21:56:49',
    url: 'https://google.com',
    timeSpent: 164
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-23',
    timeAccessed: '23:23:59',
    url: 'https://github.com',
    timeSpent: 147
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-13',
    timeAccessed: '03:37:19',
    url: 'https://example.com',
    timeSpent: 252
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-29',
    timeAccessed: '02:01:37',
    url: 'https://github.com',
    timeSpent: 459
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-16',
    timeAccessed: '11:25:09',
    url: 'https://google.com',
    timeSpent: 36
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-04',
    timeAccessed: '09:08:18',
    url: 'https://stackoverflow.com',
    timeSpent: 179
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-22',
    timeAccessed: '12:17:05',
    url: 'https://github.com',
    timeSpent: 109
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-24',
    timeAccessed: '00:01:28',
    url: 'https://github.com',
    timeSpent: 463
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-12',
    timeAccessed: '19:30:23',
    url: 'https://example.com',
    timeSpent: 55
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-27',
    timeAccessed: '13:11:10',
    url: 'https://example.com',
    timeSpent: 316
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-06',
    timeAccessed: '02:10:51',
    url: 'https://github.com',
    timeSpent: 556
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-08',
    timeAccessed: '14:52:59',
    url: 'https://google.com',
    timeSpent: 421
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-12',
    timeAccessed: '06:20:32',
    url: 'https://example.com',
    timeSpent: 450
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-05',
    timeAccessed: '14:54:18',
    url: 'https://stackoverflow.com',
    timeSpent: 40
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-30',
    timeAccessed: '15:54:29',
    url: 'https://wikipedia.org',
    timeSpent: 279
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-01',
    timeAccessed: '04:52:11',
    url: 'https://github.com',
    timeSpent: 529
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-01',
    timeAccessed: '20:42:33',
    url: 'https://google.com',
    timeSpent: 550
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-02',
    timeAccessed: '11:10:06',
    url: 'https://example.com',
    timeSpent: 442
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-17',
    timeAccessed: '06:02:17',
    url: 'https://google.com',
    timeSpent: 99
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-18',
    timeAccessed: '15:48:25',
    url: 'https://google.com',
    timeSpent: 70
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-10',
    timeAccessed: '16:58:42',
    url: 'https://example.com',
    timeSpent: 163
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-08',
    timeAccessed: '01:34:05',
    url: 'https://github.com',
    timeSpent: 132
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-09',
    timeAccessed: '06:34:01',
    url: 'https://github.com',
    timeSpent: 78
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-31',
    timeAccessed: '03:05:33',
    url: 'https://github.com',
    timeSpent: 513
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-04',
    timeAccessed: '20:49:55',
    url: 'https://stackoverflow.com',
    timeSpent: 24
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-01',
    timeAccessed: '20:58:13',
    url: 'https://stackoverflow.com',
    timeSpent: 188
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-05',
    timeAccessed: '09:56:40',
    url: 'https://stackoverflow.com',
    timeSpent: 401
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-05',
    timeAccessed: '12:07:54',
    url: 'https://github.com',
    timeSpent: 444
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-10',
    timeAccessed: '20:45:12',
    url: 'https://github.com',
    timeSpent: 493
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-07',
    timeAccessed: '12:22:07',
    url: 'https://example.com',
    timeSpent: 20
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-14',
    timeAccessed: '14:42:40',
    url: 'https://github.com',
    timeSpent: 560
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-19',
    timeAccessed: '09:48:35',
    url: 'https://example.com',
    timeSpent: 407
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-16',
    timeAccessed: '01:55:37',
    url: 'https://wikipedia.org',
    timeSpent: 107
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-08',
    timeAccessed: '10:07:05',
    url: 'https://stackoverflow.com',
    timeSpent: 348
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-03',
    timeAccessed: '02:05:43',
    url: 'https://stackoverflow.com',
    timeSpent: 230
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-01',
    timeAccessed: '03:30:48',
    url: 'https://google.com',
    timeSpent: 141
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-20',
    timeAccessed: '14:08:30',
    url: 'https://github.com',
    timeSpent: 30
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-06',
    timeAccessed: '04:42:36',
    url: 'https://wikipedia.org',
    timeSpent: 346
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-28',
    timeAccessed: '02:00:37',
    url: 'https://google.com',
    timeSpent: 523
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-12',
    timeAccessed: '14:53:37',
    url: 'https://wikipedia.org',
    timeSpent: 195
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-07',
    timeAccessed: '12:53:42',
    url: 'https://github.com',
    timeSpent: 406
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-01',
    timeAccessed: '21:51:25',
    url: 'https://example.com',
    timeSpent: 593
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-27',
    timeAccessed: '11:49:25',
    url: 'https://github.com',
    timeSpent: 401
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-23',
    timeAccessed: '00:06:34',
    url: 'https://wikipedia.org',
    timeSpent: 357
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-08',
    timeAccessed: '22:59:52',
    url: 'https://example.com',
    timeSpent: 584
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-10',
    timeAccessed: '02:16:21',
    url: 'https://github.com',
    timeSpent: 54
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-17',
    timeAccessed: '12:46:49',
    url: 'https://google.com',
    timeSpent: 271
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-09',
    timeAccessed: '11:21:44',
    url: 'https://github.com',
    timeSpent: 145
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-12',
    timeAccessed: '22:45:43',
    url: 'https://github.com',
    timeSpent: 136
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-14',
    timeAccessed: '12:45:51',
    url: 'https://wikipedia.org',
    timeSpent: 523
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-04',
    timeAccessed: '22:47:55',
    url: 'https://github.com',
    timeSpent: 133
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-09',
    timeAccessed: '03:50:09',
    url: 'https://example.com',
    timeSpent: 196
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-23',
    timeAccessed: '19:25:40',
    url: 'https://github.com',
    timeSpent: 196
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-16',
    timeAccessed: '18:23:51',
    url: 'https://wikipedia.org',
    timeSpent: 284
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-03',
    timeAccessed: '22:56:13',
    url: 'https://google.com',
    timeSpent: 490
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-31',
    timeAccessed: '21:44:23',
    url: 'https://github.com',
    timeSpent: 30
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-14',
    timeAccessed: '18:11:20',
    url: 'https://google.com',
    timeSpent: 351
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-22',
    timeAccessed: '17:47:18',
    url: 'https://stackoverflow.com',
    timeSpent: 576
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-08',
    timeAccessed: '10:05:43',
    url: 'https://google.com',
    timeSpent: 457
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-17',
    timeAccessed: '04:08:28',
    url: 'https://github.com',
    timeSpent: 571
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-15',
    timeAccessed: '13:29:52',
    url: 'https://wikipedia.org',
    timeSpent: 529
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-21',
    timeAccessed: '09:21:59',
    url: 'https://wikipedia.org',
    timeSpent: 302
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-07-05',
    timeAccessed: '22:05:29',
    url: 'https://google.com',
    timeSpent: 550
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-07',
    timeAccessed: '08:40:59',
    url: 'https://wikipedia.org',
    timeSpent: 581
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-06',
    timeAccessed: '16:37:43',
    url: 'https://google.com',
    timeSpent: 196
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-09',
    timeAccessed: '00:20:10',
    url: 'https://example.com',
    timeSpent: 302
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-23',
    timeAccessed: '15:31:28',
    url: 'https://google.com',
    timeSpent: 383
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-06',
    timeAccessed: '23:42:55',
    url: 'https://google.com',
    timeSpent: 356
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-10',
    timeAccessed: '22:24:11',
    url: 'https://wikipedia.org',
    timeSpent: 572
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-23',
    timeAccessed: '16:24:29',
    url: 'https://google.com',
    timeSpent: 48
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-02',
    timeAccessed: '00:29:15',
    url: 'https://wikipedia.org',
    timeSpent: 115
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-01',
    timeAccessed: '02:49:14',
    url: 'https://stackoverflow.com',
    timeSpent: 190
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-29',
    timeAccessed: '11:13:08',
    url: 'https://github.com',
    timeSpent: 300
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-30',
    timeAccessed: '09:24:19',
    url: 'https://stackoverflow.com',
    timeSpent: 32
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-01',
    timeAccessed: '21:04:09',
    url: 'https://stackoverflow.com',
    timeSpent: 12
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-15',
    timeAccessed: '10:18:48',
    url: 'https://stackoverflow.com',
    timeSpent: 271
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-24',
    timeAccessed: '14:05:40',
    url: 'https://stackoverflow.com',
    timeSpent: 388
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-08',
    timeAccessed: '06:13:18',
    url: 'https://wikipedia.org',
    timeSpent: 230
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-10',
    timeAccessed: '20:30:49',
    url: 'https://example.com',
    timeSpent: 168
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-05',
    timeAccessed: '10:28:59',
    url: 'https://github.com',
    timeSpent: 518
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-12',
    timeAccessed: '16:57:22',
    url: 'https://github.com',
    timeSpent: 37
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-27',
    timeAccessed: '20:14:27',
    url: 'https://example.com',
    timeSpent: 540
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-12',
    timeAccessed: '22:45:13',
    url: 'https://stackoverflow.com',
    timeSpent: 526
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-26',
    timeAccessed: '11:08:55',
    url: 'https://stackoverflow.com',
    timeSpent: 244
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-27',
    timeAccessed: '13:28:53',
    url: 'https://wikipedia.org',
    timeSpent: 194
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-22',
    timeAccessed: '13:57:43',
    url: 'https://stackoverflow.com',
    timeSpent: 199
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-25',
    timeAccessed: '19:51:29',
    url: 'https://google.com',
    timeSpent: 34
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-21',
    timeAccessed: '15:57:06',
    url: 'https://stackoverflow.com',
    timeSpent: 182
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-16',
    timeAccessed: '19:48:18',
    url: 'https://github.com',
    timeSpent: 508
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-27',
    timeAccessed: '10:20:28',
    url: 'https://example.com',
    timeSpent: 279
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-01',
    timeAccessed: '10:31:48',
    url: 'https://stackoverflow.com',
    timeSpent: 58
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-30',
    timeAccessed: '22:51:08',
    url: 'https://stackoverflow.com',
    timeSpent: 137
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-27',
    timeAccessed: '13:41:20',
    url: 'https://stackoverflow.com',
    timeSpent: 513
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-18',
    timeAccessed: '02:58:48',
    url: 'https://google.com',
    timeSpent: 498
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-08',
    timeAccessed: '14:53:37',
    url: 'https://github.com',
    timeSpent: 206
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-06',
    timeAccessed: '08:21:56',
    url: 'https://wikipedia.org',
    timeSpent: 121
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-19',
    timeAccessed: '19:35:49',
    url: 'https://wikipedia.org',
    timeSpent: 43
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-10',
    timeAccessed: '10:03:43',
    url: 'https://github.com',
    timeSpent: 290
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-21',
    timeAccessed: '14:13:33',
    url: 'https://example.com',
    timeSpent: 186
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-16',
    timeAccessed: '19:52:39',
    url: 'https://stackoverflow.com',
    timeSpent: 294
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-05',
    timeAccessed: '04:05:53',
    url: 'https://example.com',
    timeSpent: 560
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-02',
    timeAccessed: '07:16:26',
    url: 'https://google.com',
    timeSpent: 569
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-10',
    timeAccessed: '13:55:11',
    url: 'https://google.com',
    timeSpent: 92
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-30',
    timeAccessed: '08:44:39',
    url: 'https://github.com',
    timeSpent: 63
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-24',
    timeAccessed: '18:28:48',
    url: 'https://wikipedia.org',
    timeSpent: 445
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-21',
    timeAccessed: '15:20:33',
    url: 'https://example.com',
    timeSpent: 15
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-24',
    timeAccessed: '07:06:23',
    url: 'https://example.com',
    timeSpent: 107
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-11',
    timeAccessed: '07:38:13',
    url: 'https://google.com',
    timeSpent: 452
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-11',
    timeAccessed: '05:04:58',
    url: 'https://example.com',
    timeSpent: 521
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-13',
    timeAccessed: '04:20:17',
    url: 'https://example.com',
    timeSpent: 14
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-14',
    timeAccessed: '02:21:31',
    url: 'https://wikipedia.org',
    timeSpent: 21
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-02',
    timeAccessed: '01:42:55',
    url: 'https://google.com',
    timeSpent: 470
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-20',
    timeAccessed: '05:17:05',
    url: 'https://stackoverflow.com',
    timeSpent: 182
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-07',
    timeAccessed: '17:46:54',
    url: 'https://github.com',
    timeSpent: 564
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-19',
    timeAccessed: '00:50:44',
    url: 'https://stackoverflow.com',
    timeSpent: 132
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-15',
    timeAccessed: '02:16:38',
    url: 'https://github.com',
    timeSpent: 513
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-13',
    timeAccessed: '20:07:35',
    url: 'https://wikipedia.org',
    timeSpent: 475
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-29',
    timeAccessed: '12:47:10',
    url: 'https://stackoverflow.com',
    timeSpent: 137
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-13',
    timeAccessed: '13:01:38',
    url: 'https://google.com',
    timeSpent: 271
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-16',
    timeAccessed: '20:15:59',
    url: 'https://github.com',
    timeSpent: 122
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-16',
    timeAccessed: '20:55:58',
    url: 'https://github.com',
    timeSpent: 406
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-18',
    timeAccessed: '08:01:18',
    url: 'https://github.com',
    timeSpent: 534
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-25',
    timeAccessed: '04:56:50',
    url: 'https://wikipedia.org',
    timeSpent: 144
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-19',
    timeAccessed: '04:59:24',
    url: 'https://google.com',
    timeSpent: 374
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-19',
    timeAccessed: '07:35:37',
    url: 'https://example.com',
    timeSpent: 506
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-12',
    timeAccessed: '16:40:30',
    url: 'https://stackoverflow.com',
    timeSpent: 571
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-01',
    timeAccessed: '19:32:23',
    url: 'https://wikipedia.org',
    timeSpent: 236
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-08',
    timeAccessed: '01:57:51',
    url: 'https://github.com',
    timeSpent: 437
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-02',
    timeAccessed: '02:14:19',
    url: 'https://github.com',
    timeSpent: 133
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-11',
    timeAccessed: '05:20:04',
    url: 'https://stackoverflow.com',
    timeSpent: 229
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-16',
    timeAccessed: '21:38:47',
    url: 'https://stackoverflow.com',
    timeSpent: 595
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-19',
    timeAccessed: '11:59:08',
    url: 'https://github.com',
    timeSpent: 275
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-10-18',
    timeAccessed: '13:06:40',
    url: 'https://github.com',
    timeSpent: 270
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-11',
    timeAccessed: '07:43:12',
    url: 'https://google.com',
    timeSpent: 203
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-24',
    timeAccessed: '06:09:14',
    url: 'https://google.com',
    timeSpent: 296
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-24',
    timeAccessed: '01:08:17',
    url: 'https://stackoverflow.com',
    timeSpent: 468
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-23',
    timeAccessed: '20:53:23',
    url: 'https://example.com',
    timeSpent: 139
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-10',
    timeAccessed: '11:05:01',
    url: 'https://wikipedia.org',
    timeSpent: 249
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-10',
    timeAccessed: '23:38:03',
    url: 'https://example.com',
    timeSpent: 570
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-08',
    timeAccessed: '11:22:47',
    url: 'https://google.com',
    timeSpent: 164
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-13',
    timeAccessed: '06:50:09',
    url: 'https://stackoverflow.com',
    timeSpent: 133
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-14',
    timeAccessed: '21:53:44',
    url: 'https://stackoverflow.com',
    timeSpent: 576
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-18',
    timeAccessed: '02:36:49',
    url: 'https://example.com',
    timeSpent: 218
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-05',
    timeAccessed: '00:59:44',
    url: 'https://google.com',
    timeSpent: 326
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-25',
    timeAccessed: '10:19:17',
    url: 'https://wikipedia.org',
    timeSpent: 128
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-20',
    timeAccessed: '22:41:53',
    url: 'https://wikipedia.org',
    timeSpent: 518
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-03',
    timeAccessed: '10:40:12',
    url: 'https://stackoverflow.com',
    timeSpent: 327
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-12',
    timeAccessed: '01:30:41',
    url: 'https://example.com',
    timeSpent: 201
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-21',
    timeAccessed: '13:49:23',
    url: 'https://stackoverflow.com',
    timeSpent: 361
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-05',
    timeAccessed: '06:28:02',
    url: 'https://wikipedia.org',
    timeSpent: 567
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-11',
    timeAccessed: '04:30:00',
    url: 'https://stackoverflow.com',
    timeSpent: 77
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-11',
    timeAccessed: '07:47:42',
    url: 'https://google.com',
    timeSpent: 159
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-17',
    timeAccessed: '09:21:58',
    url: 'https://wikipedia.org',
    timeSpent: 36
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-17',
    timeAccessed: '18:49:38',
    url: 'https://wikipedia.org',
    timeSpent: 374
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-11',
    timeAccessed: '15:05:58',
    url: 'https://google.com',
    timeSpent: 393
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-31',
    timeAccessed: '02:09:32',
    url: 'https://google.com',
    timeSpent: 587
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-14',
    timeAccessed: '18:18:26',
    url: 'https://google.com',
    timeSpent: 47
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-08-11',
    timeAccessed: '15:49:00',
    url: 'https://github.com',
    timeSpent: 342
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-04',
    timeAccessed: '08:07:44',
    url: 'https://stackoverflow.com',
    timeSpent: 294
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-18',
    timeAccessed: '21:59:42',
    url: 'https://google.com',
    timeSpent: 590
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-02',
    timeAccessed: '18:43:12',
    url: 'https://example.com',
    timeSpent: 20
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-21',
    timeAccessed: '05:36:40',
    url: 'https://example.com',
    timeSpent: 12
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-05',
    timeAccessed: '06:12:01',
    url: 'https://github.com',
    timeSpent: 490
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-07',
    timeAccessed: '19:13:38',
    url: 'https://stackoverflow.com',
    timeSpent: 514
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-16',
    timeAccessed: '16:24:38',
    url: 'https://wikipedia.org',
    timeSpent: 196
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-25',
    timeAccessed: '09:48:28',
    url: 'https://google.com',
    timeSpent: 184
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-26',
    timeAccessed: '12:39:44',
    url: 'https://github.com',
    timeSpent: 465
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-05',
    timeAccessed: '04:40:20',
    url: 'https://stackoverflow.com',
    timeSpent: 29
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-04',
    timeAccessed: '03:47:47',
    url: 'https://github.com',
    timeSpent: 304
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-07-10',
    timeAccessed: '14:42:52',
    url: 'https://example.com',
    timeSpent: 297
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-16',
    timeAccessed: '00:41:59',
    url: 'https://stackoverflow.com',
    timeSpent: 103
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-03',
    timeAccessed: '23:06:40',
    url: 'https://github.com',
    timeSpent: 435
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-22',
    timeAccessed: '13:12:34',
    url: 'https://google.com',
    timeSpent: 486
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-10',
    timeAccessed: '17:47:01',
    url: 'https://wikipedia.org',
    timeSpent: 580
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-02',
    timeAccessed: '15:13:21',
    url: 'https://stackoverflow.com',
    timeSpent: 6
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-09-27',
    timeAccessed: '09:53:15',
    url: 'https://google.com',
    timeSpent: 499
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-08',
    timeAccessed: '16:59:25',
    url: 'https://stackoverflow.com',
    timeSpent: 90
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-09',
    timeAccessed: '14:24:52',
    url: 'https://wikipedia.org',
    timeSpent: 252
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-21',
    timeAccessed: '13:40:19',
    url: 'https://stackoverflow.com',
    timeSpent: 507
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-29',
    timeAccessed: '09:04:28',
    url: 'https://stackoverflow.com',
    timeSpent: 172
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-09',
    timeAccessed: '09:59:06',
    url: 'https://stackoverflow.com',
    timeSpent: 426
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-10-24',
    timeAccessed: '04:52:17',
    url: 'https://example.com',
    timeSpent: 599
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-13',
    timeAccessed: '19:53:30',
    url: 'https://wikipedia.org',
    timeSpent: 62
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-18',
    timeAccessed: '23:20:24',
    url: 'https://github.com',
    timeSpent: 313
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-05',
    timeAccessed: '07:21:14',
    url: 'https://github.com',
    timeSpent: 230
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-09',
    timeAccessed: '19:29:42',
    url: 'https://stackoverflow.com',
    timeSpent: 511
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-12',
    timeAccessed: '17:44:46',
    url: 'https://wikipedia.org',
    timeSpent: 81
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-26',
    timeAccessed: '05:11:10',
    url: 'https://github.com',
    timeSpent: 129
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-18',
    timeAccessed: '17:56:19',
    url: 'https://github.com',
    timeSpent: 241
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-13',
    timeAccessed: '20:45:23',
    url: 'https://github.com',
    timeSpent: 170
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-29',
    timeAccessed: '09:31:20',
    url: 'https://wikipedia.org',
    timeSpent: 394
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-20',
    timeAccessed: '04:13:01',
    url: 'https://stackoverflow.com',
    timeSpent: 315
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-09-03',
    timeAccessed: '03:04:11',
    url: 'https://google.com',
    timeSpent: 298
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-08-30',
    timeAccessed: '01:03:13',
    url: 'https://stackoverflow.com',
    timeSpent: 391
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-05',
    timeAccessed: '11:06:41',
    url: 'https://google.com',
    timeSpent: 308
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-10-21',
    timeAccessed: '20:39:15',
    url: 'https://example.com',
    timeSpent: 384
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-24',
    timeAccessed: '02:48:07',
    url: 'https://github.com',
    timeSpent: 338
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-19',
    timeAccessed: '23:50:54',
    url: 'https://stackoverflow.com',
    timeSpent: 285
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-08',
    timeAccessed: '04:23:55',
    url: 'https://github.com',
    timeSpent: 312
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-01',
    timeAccessed: '12:14:32',
    url: 'https://wikipedia.org',
    timeSpent: 313
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-28',
    timeAccessed: '10:37:21',
    url: 'https://stackoverflow.com',
    timeSpent: 532
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-21',
    timeAccessed: '16:10:39',
    url: 'https://wikipedia.org',
    timeSpent: 563
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-26',
    timeAccessed: '02:43:52',
    url: 'https://example.com',
    timeSpent: 561
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-25',
    timeAccessed: '00:58:04',
    url: 'https://example.com',
    timeSpent: 236
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-06',
    timeAccessed: '08:58:18',
    url: 'https://example.com',
    timeSpent: 396
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-18',
    timeAccessed: '00:26:20',
    url: 'https://stackoverflow.com',
    timeSpent: 172
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-27',
    timeAccessed: '11:43:56',
    url: 'https://github.com',
    timeSpent: 293
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-28',
    timeAccessed: '16:50:36',
    url: 'https://stackoverflow.com',
    timeSpent: 248
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-07',
    timeAccessed: '09:14:26',
    url: 'https://example.com',
    timeSpent: 525
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-24',
    timeAccessed: '22:39:24',
    url: 'https://github.com',
    timeSpent: 491
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-17',
    timeAccessed: '21:18:58',
    url: 'https://google.com',
    timeSpent: 517
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-25',
    timeAccessed: '01:52:33',
    url: 'https://wikipedia.org',
    timeSpent: 413
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-21',
    timeAccessed: '07:59:38',
    url: 'https://google.com',
    timeSpent: 315
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-09-15',
    timeAccessed: '05:56:32',
    url: 'https://github.com',
    timeSpent: 86
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-21',
    timeAccessed: '20:25:12',
    url: 'https://github.com',
    timeSpent: 353
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-08-30',
    timeAccessed: '14:49:28',
    url: 'https://stackoverflow.com',
    timeSpent: 516
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-13',
    timeAccessed: '05:15:20',
    url: 'https://google.com',
    timeSpent: 481
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-19',
    timeAccessed: '14:28:50',
    url: 'https://wikipedia.org',
    timeSpent: 7
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-25',
    timeAccessed: '16:40:24',
    url: 'https://example.com',
    timeSpent: 152
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-30',
    timeAccessed: '17:10:12',
    url: 'https://stackoverflow.com',
    timeSpent: 5
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-19',
    timeAccessed: '16:57:27',
    url: 'https://google.com',
    timeSpent: 65
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-13',
    timeAccessed: '18:50:33',
    url: 'https://google.com',
    timeSpent: 481
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-10-18',
    timeAccessed: '13:15:52',
    url: 'https://wikipedia.org',
    timeSpent: 195
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-09',
    timeAccessed: '16:39:17',
    url: 'https://wikipedia.org',
    timeSpent: 190
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-06',
    timeAccessed: '00:44:06',
    url: 'https://wikipedia.org',
    timeSpent: 197
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-24',
    timeAccessed: '09:24:51',
    url: 'https://stackoverflow.com',
    timeSpent: 281
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-26',
    timeAccessed: '22:43:37',
    url: 'https://google.com',
    timeSpent: 358
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-14',
    timeAccessed: '09:47:51',
    url: 'https://example.com',
    timeSpent: 351
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-08',
    timeAccessed: '09:10:58',
    url: 'https://google.com',
    timeSpent: 553
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-06',
    timeAccessed: '09:06:15',
    url: 'https://github.com',
    timeSpent: 570
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-29',
    timeAccessed: '14:18:03',
    url: 'https://google.com',
    timeSpent: 430
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-07-08',
    timeAccessed: '02:41:55',
    url: 'https://github.com',
    timeSpent: 161
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-17',
    timeAccessed: '02:48:53',
    url: 'https://github.com',
    timeSpent: 360
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-06',
    timeAccessed: '07:32:42',
    url: 'https://example.com',
    timeSpent: 258
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-08-01',
    timeAccessed: '08:56:16',
    url: 'https://google.com',
    timeSpent: 173
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-26',
    timeAccessed: '09:13:39',
    url: 'https://example.com',
    timeSpent: 63
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-18',
    timeAccessed: '14:57:04',
    url: 'https://stackoverflow.com',
    timeSpent: 502
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-17',
    timeAccessed: '08:28:24',
    url: 'https://wikipedia.org',
    timeSpent: 159
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-09-19',
    timeAccessed: '00:55:12',
    url: 'https://github.com',
    timeSpent: 72
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-11',
    timeAccessed: '00:27:18',
    url: 'https://wikipedia.org',
    timeSpent: 239
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-07-19',
    timeAccessed: '10:17:42',
    url: 'https://github.com',
    timeSpent: 75
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-10',
    timeAccessed: '07:14:32',
    url: 'https://wikipedia.org',
    timeSpent: 400
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-22',
    timeAccessed: '10:23:59',
    url: 'https://stackoverflow.com',
    timeSpent: 419
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-02',
    timeAccessed: '15:26:50',
    url: 'https://google.com',
    timeSpent: 135
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-07',
    timeAccessed: '09:30:55',
    url: 'https://wikipedia.org',
    timeSpent: 534
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-10-20',
    timeAccessed: '12:33:05',
    url: 'https://stackoverflow.com',
    timeSpent: 61
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-24',
    timeAccessed: '11:31:17',
    url: 'https://github.com',
    timeSpent: 246
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-08-18',
    timeAccessed: '07:37:34',
    url: 'https://google.com',
    timeSpent: 555
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-10-26',
    timeAccessed: '01:11:18',
    url: 'https://wikipedia.org',
    timeSpent: 406
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-01',
    timeAccessed: '14:12:16',
    url: 'https://google.com',
    timeSpent: 335
  },
  {
    userId: 'user 8',
    dateAccessed: '2023-08-13',
    timeAccessed: '21:38:26',
    url: 'https://wikipedia.org',
    timeSpent: 458
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-12',
    timeAccessed: '19:07:41',
    url: 'https://example.com',
    timeSpent: 52
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-06',
    timeAccessed: '08:45:17',
    url: 'https://stackoverflow.com',
    timeSpent: 498
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-15',
    timeAccessed: '17:58:58',
    url: 'https://stackoverflow.com',
    timeSpent: 472
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-07-11',
    timeAccessed: '16:50:34',
    url: 'https://wikipedia.org',
    timeSpent: 434
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-21',
    timeAccessed: '12:40:51',
    url: 'https://github.com',
    timeSpent: 272
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-12',
    timeAccessed: '22:39:59',
    url: 'https://example.com',
    timeSpent: 174
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-10-02',
    timeAccessed: '05:09:33',
    url: 'https://google.com',
    timeSpent: 41
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-10-16',
    timeAccessed: '20:32:15',
    url: 'https://github.com',
    timeSpent: 421
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-27',
    timeAccessed: '21:05:05',
    url: 'https://stackoverflow.com',
    timeSpent: 189
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-09',
    timeAccessed: '19:52:40',
    url: 'https://wikipedia.org',
    timeSpent: 412
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-08-12',
    timeAccessed: '08:42:23',
    url: 'https://wikipedia.org',
    timeSpent: 317
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-08-17',
    timeAccessed: '12:06:20',
    url: 'https://example.com',
    timeSpent: 565
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-07-28',
    timeAccessed: '00:17:08',
    url: 'https://google.com',
    timeSpent: 287
  },
  {
    userId: 'user 4',
    dateAccessed: '2023-07-20',
    timeAccessed: '02:56:27',
    url: 'https://example.com',
    timeSpent: 248
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-07-13',
    timeAccessed: '01:22:19',
    url: 'https://stackoverflow.com',
    timeSpent: 551
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-11',
    timeAccessed: '07:11:48',
    url: 'https://stackoverflow.com',
    timeSpent: 499
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-07',
    timeAccessed: '07:00:15',
    url: 'https://example.com',
    timeSpent: 112
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-09-21',
    timeAccessed: '23:07:03',
    url: 'https://github.com',
    timeSpent: 399
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-09-21',
    timeAccessed: '19:08:29',
    url: 'https://wikipedia.org',
    timeSpent: 378
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-08-08',
    timeAccessed: '20:05:41',
    url: 'https://stackoverflow.com',
    timeSpent: 249
  },
  {
    userId: 'user 2',
    dateAccessed: '2023-07-18',
    timeAccessed: '20:28:27',
    url: 'https://wikipedia.org',
    timeSpent: 246
  },
  {
    userId: 'user 7',
    dateAccessed: '2023-09-05',
    timeAccessed: '08:05:18',
    url: 'https://github.com',
    timeSpent: 12
  },
  {
    userId: 'user 6',
    dateAccessed: '2023-07-24',
    timeAccessed: '16:51:31',
    url: 'https://google.com',
    timeSpent: 39
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-10-03',
    timeAccessed: '08:35:28',
    url: 'https://example.com',
    timeSpent: 196
  },
  {
    userId: 'user 5',
    dateAccessed: '2023-09-23',
    timeAccessed: '07:31:06',
    url: 'https://github.com',
    timeSpent: 299
  },
  {
    userId: 'user 10',
    dateAccessed: '2023-09-05',
    timeAccessed: '12:18:18',
    url: 'https://wikipedia.org',
    timeSpent: 557
  },
  {
    userId: 'user 9',
    dateAccessed: '2023-09-16',
    timeAccessed: '11:29:08',
    url: 'https://stackoverflow.com',
    timeSpent: 102
  },
  {
    userId: 'user 3',
    dateAccessed: '2023-08-14',
    timeAccessed: '21:47:43',
    url: 'https://stackoverflow.com',
    timeSpent: 322
  },
  {
    userId: 'user 1',
    dateAccessed: '2023-10-08',
    timeAccessed: '10:23:43',
    url: 'https://github.com',
    timeSpent: 143
  }
]

export default apiData
