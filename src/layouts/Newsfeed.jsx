import React, { Component } from 'react'

import Message from 'components/Message'

let message = {
  'body': 'Could someone recommend a place to have a bike serviced? &nbsp;Somewhere not too expensive if possible, as the bike is getting on a bit but want to be sure if safe to use. &nbsp;Many thanks.',
  'attachments': [],
  'videos': [],
  'topics': [
    {
      'slug': 'recommendations',
      'name': 'Recommendations'
    },
    {
      'slug': 'wanted',
      'name': 'Wanted'
    }
  ],
  'updated_at': '2016-03-21T11:35:13.676729+00:00',
  'id': 'bjkgenydg2uz',
  'subject': 'Bike servicing',
  'downvotes': 0,
  'author': {
    'nearest_area': {
      'area_id': '25k2bqxm4ibh1',
      'slug': 'church-end-greater-london',
      'point': [
        -0.20384223963218923,
        51.59959122376928
      ],
      'id': '3u5jqkvmds98b',
      'name': 'Church End'
    },
    'display_name': 'Georgina',
    'profile_id': 'FJOqt',
    'avatar': 'https://streetlife-uk-live-media.s3.amazonaws.com/profile/FJOqt2_photo.png',
    'id': '1sf5vifblimnk'
  },
  'posted_at': '2016-02-15T08:46:24.200394+00:00',
  'comments': [
    {
      'relative_id': 21,
      'attachments': [],
      'videos': [],
      'downvotes': 0,
      'updated_at': '2016-03-20T08:55:58.498045+00:00',
      'id': '2iiv6tsqxvab3',
      'user_vote': 0,
      'posted_at': '2016-03-20T08:55:58.498045+00:00',
      'author': {
        'nearest_area': {
          'area_id': '3qb1hhadvudj',
          'slug': 'woodside-park',
          'point': [
            -0.18811180656291732,
            51.6174355225536
          ],
          'id': '348i9yl37633e',
          'name': 'Woodside Park'
        },
        'display_name': 'Liz G',
        'profile_id': 'yVJ0X',
        'avatar': 'https://streetlife-uk-live-media.s3.amazonaws.com/no_profile/42_photo.png',
        'id': '2iy5waadfl2sb'
      },
      'upvotes': 0
    },
    {
      'body': 'I had mine done by George recently and found him amazing:&nbsp;<a href="mailto:g.boustred@gmail.com">g.boustred@gmail.com</a><br><br>(and my rave review:&nbsp;<a href="https://www.streetlife.com/conversation/me57jtclr0tv/" rel="nofollow" target="_blank">https://www.streetlife.com/conversation/me57jtclr0tv/</a>&nbsp;)',
      'relative_id': 22,
      'attachments': [],
      'videos': [],
      'downvotes': 0,
      'updated_at': '2016-03-21T11:35:13.676729+00:00',
      'id': '36o575h9ygtm4',
      'user_vote': 0,
      'posted_at': '2016-03-21T11:34:15.549079+00:00',
      'author': {
        'nearest_area': {
          'area_id': '18j3rvgnv3uga',
          'slug': 'mill-hill',
          'point': [
            -0.2281846288857654,
            51.61586457373545
          ],
          'id': '1pe29d10wx5cc',
          'name': 'Mill Hill'
        },
        'display_name': 'Sami Greenbury',
        'profile_id': 'JN2he',
        'avatar': 'https://streetlife-uk-live-media.s3.amazonaws.com/profile/JN2he1_photo.png',
        'id': '3tn424tlnekb5'
      },
      'upvotes': 0
    }
  ],
  'user_vote': 0,
  'upvotes': 0,
  'status': 0,
  'tags': [
    {
      'id': 9,
      'name': 'Wanted'
    }
  ],
  'locations': [
    {
      'area_id': '22jnl1k9gqqms',
      'slug': 'golders-green',
      'point': [
        -0.19367322301737264,
        51.58115512481691
      ],
      'id': '7icel4oucdjd',
      'name': 'Golders Green'
    },
    {
      'area_id': '2s8qx22o1819u',
      'slug': 'whetstone',
      'point': [
        -0.17136731666566798,
        51.626727846566965
      ],
      'id': 'ed0w196l1u96',
      'name': 'Whetstone'
    },
    {
      'area_id': 'pnbfx1gakm4c',
      'slug': 'colney-hatch',
      'point': [
        -0.1601882249687959,
        51.60790743302484
      ],
      'id': '27m8lotl3xz1b',
      'name': 'Colney Hatch'
    },
    {
      'area_id': '3go618qitq6cb',
      'slug': 'totteridge-greater-london',
      'point': [
        -0.18548325952434652,
        51.62909357934829
      ],
      'id': '3atkatwuadud0',
      'name': 'Totteridge'
    },
    {
      'area_id': '18j3rvgnv3uga',
      'slug': 'mill-hill',
      'point': [
        -0.2281846288857654,
        51.61586457373545
      ],
      'id': '1pe29d10wx5cc',
      'name': 'Mill Hill'
    },
    {
      'area_id': 'bn7928q3a51t',
      'slug': 'holders-hill',
      'point': [
        -0.2182728753362025,
        51.59981116324603
      ],
      'id': '1db4pcqb03v2a',
      'name': 'Holders Hill'
    },
    {
      'area_id': '30df2mmkekdko',
      'slug': 'finchley',
      'point': [
        -0.18994058116428977,
        51.59732723445325
      ],
      'id': '3lutekhbez5lz',
      'name': 'Finchley'
    },
    {
      'area_id': '3qb1hhadvudj',
      'slug': 'woodside-park',
      'point': [
        -0.18811180656291732,
        51.6174355225536
      ],
      'id': '348i9yl37633e',
      'name': 'Woodside Park'
    },
    {
      'area_id': '1zr6lku2x0z3s',
      'slug': 'north-finchley',
      'point': [
        -0.18165705772437185,
        51.61286315519435
      ],
      'id': '3hxh0ualj06wj',
      'name': 'North Finchley'
    },
    {
      'area_id': '25k2bqxm4ibh1',
      'slug': 'church-end-greater-london',
      'point': [
        -0.20384223963218923,
        51.59959122376928
      ],
      'id': '3u5jqkvmds98b',
      'name': 'Church End'
    }
  ],
  'track_impact': true,
  'user_is_following': false,
  'comments_count': 20
}

class Newsfeed extends Component {
  render () {
    return (
      <div>
        <Message
          id={message.id}
          subject={message.subject}
          author={message.author}
          postedAt={new Date(message.posted_at)}
          body={message.body.replace(/&nbsp;/g, '')} // NOTE: This would not be necessary if we were sanitizing the body before it got to storage!
        />
      </div>
    )
  }
}

export default Newsfeed
