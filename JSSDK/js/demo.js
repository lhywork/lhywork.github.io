/*
 * ע�⣺
 * 1. ���е�JS�ӿ�ֻ���ڹ��ںŰ󶨵������µ��ã����ںſ�������Ҫ�ȵ�¼΢�Ź���ƽ̨���롰���ں����á��ġ��������á�����д��JS�ӿڰ�ȫ��������
 * 2. ��������� Android ���ܷ����Զ������ݣ��뵽�����������µİ����ǰ�װ��Android �Զ�������ӿ��������� 6.0.2.58 �汾�����ϡ�
 * 3. ���� JS-SDK �ĵ���ַ��http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
 *
 * ����������ͨ����������������
 * �����ַ��weixin-open@qq.com
 * �ʼ����⣺��΢��JS-SDK��������������
 * �ʼ�����˵�����ü��������������������ڣ��������������������ĳ������ɸ��Ͻ���ͼƬ��΢���Ŷӻᾡ�촦����ķ�����
 */
wx.ready(function () {
  // 1 �жϵ�ǰ�汾�Ƿ�֧��ָ�� JS �ӿڣ�֧�������ж�
  document.querySelector('#checkJsApi').onclick = function () {
    wx.checkJsApi({
      jsApiList: [
        'getNetworkType',
        'previewImage'
      ],
      success: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 2. �����ӿ�
  // 2.1 ���������������ѡ�����ť������Զ���������ݼ���������ӿ�
  document.querySelector('#onMenuShareAppMessage').onclick = function () {
    wx.onMenuShareAppMessage({
      title: '������֮��',
      desc: '�ڳ���Ĺ����У��Ҳ��������֣������ߵ������£����˸���˵�������£���Щ��ν������ˣ�ע����˵��£�������ʵû�зǵ���ˣ������ǿ��Ըı�ġ�����Ҫ���ǣ���Щ�¼�Ȼ���ˣ��Ǿ͸������ı䡣',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
      trigger: function (res) {
        // ��Ҫ������trigger��ʹ��ajax�첽�����޸ı��η��������ݣ���Ϊ�ͻ��˷���������һ��ͬ����������ʱ��ʹ��ajax�Ļذ��ỹû�з���
        alert('�û�������͸�����');
      },
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('��ע���ȡ�����͸����ѡ�״̬�¼�');
  };

  // 2.2 ����������������Ȧ����ť������Զ���������ݼ���������ӿ�
  document.querySelector('#onMenuShareTimeline').onclick = function () {
    wx.onMenuShareTimeline({
      title: '������֮��',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
      trigger: function (res) {
        // ��Ҫ������trigger��ʹ��ajax�첽�����޸ı��η��������ݣ���Ϊ�ͻ��˷���������һ��ͬ����������ʱ��ʹ��ajax�Ļذ��ỹû�з���
        alert('�û��������������Ȧ');
      },
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('��ע���ȡ������������Ȧ��״̬�¼�');
  };

  // 2.3 ������������QQ����ť������Զ���������ݼ���������ӿ�
  document.querySelector('#onMenuShareQQ').onclick = function () {
    wx.onMenuShareQQ({
      title: '������֮��',
      desc: '�ڳ���Ĺ����У��Ҳ��������֣������ߵ������£����˸���˵�������£���Щ��ν������ˣ�ע����˵��£�������ʵû�зǵ���ˣ������ǿ��Ըı�ġ�����Ҫ���ǣ���Щ�¼�Ȼ���ˣ��Ǿ͸������ı䡣',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
      trigger: function (res) {
        alert('�û����������QQ');
      },
      complete: function (res) {
        alert(JSON.stringify(res));
      },
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('��ע���ȡ�������� QQ��״̬�¼�');
  };
  
  // 2.4 ������������΢������ť������Զ���������ݼ���������ӿ�
  document.querySelector('#onMenuShareWeibo').onclick = function () {
    wx.onMenuShareWeibo({
      title: '������֮��',
      desc: '�ڳ���Ĺ����У��Ҳ��������֣������ߵ������£����˸���˵�������£���Щ��ν������ˣ�ע����˵��£�������ʵû�зǵ���ˣ������ǿ��Ըı�ġ�����Ҫ���ǣ���Щ�¼�Ȼ���ˣ��Ǿ͸������ı䡣',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
      trigger: function (res) {
        alert('�û����������΢��');
      },
      complete: function (res) {
        alert(JSON.stringify(res));
      },
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('��ע���ȡ��������΢����״̬�¼�');
  };

  // 2.5 ������������QZone����ť������Զ���������ݼ������ӿ�
  document.querySelector('#onMenuShareQZone').onclick = function () {
    wx.onMenuShareQZone({
      title: '������֮��',
      desc: '�ڳ���Ĺ����У��Ҳ��������֣������ߵ������£����˸���˵�������£���Щ��ν������ˣ�ע����˵��£�������ʵû�зǵ���ˣ������ǿ��Ըı�ġ�����Ҫ���ǣ���Щ�¼�Ȼ���ˣ��Ǿ͸������ı䡣',
      link: 'http://movie.douban.com/subject/25785114/',
      imgUrl: 'http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg',
      trigger: function (res) {
        alert('�û����������QZone');
      },
      complete: function (res) {
        alert(JSON.stringify(res));
      },
      success: function (res) {
        alert('�ѷ���');
      },
      cancel: function (res) {
        alert('��ȡ��');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    alert('��ע���ȡ��������QZone��״̬�¼�');
  };


  // 3 ���ܽӿ�
  var voice = {
    localId: '',
    serverId: ''
  };
  // 3.1 ʶ����Ƶ������ʶ����
  document.querySelector('#translateVoice').onclick = function () {
    if (voice.localId == '') {
      alert('����ʹ�� startRecord �ӿ�¼��һ������');
      return;
    }
    wx.translateVoice({
      localId: voice.localId,
      complete: function (res) {
        if (res.hasOwnProperty('translateResult')) {
          alert('ʶ������' + res.translateResult);
        } else {
          alert('�޷�ʶ��');
        }
      }
    });
  };

  // 4 ��Ƶ�ӿ�
  // 4.2 ��ʼ¼��
  document.querySelector('#startRecord').onclick = function () {
    wx.startRecord({
      cancel: function () {
        alert('�û��ܾ���Ȩ¼��');
      }
    });
  };

  // 4.3 ֹͣ¼��
  document.querySelector('#stopRecord').onclick = function () {
    wx.stopRecord({
      success: function (res) {
        voice.localId = res.localId;
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 4.4 ����¼���Զ�ֹͣ
  wx.onVoiceRecordEnd({
    complete: function (res) {
      voice.localId = res.localId;
      alert('¼��ʱ���ѳ���һ����');
    }
  });

  // 4.5 ������Ƶ
  document.querySelector('#playVoice').onclick = function () {
    if (voice.localId == '') {
      alert('����ʹ�� startRecord �ӿ�¼��һ������');
      return;
    }
    wx.playVoice({
      localId: voice.localId
    });
  };

  // 4.6 ��ͣ������Ƶ
  document.querySelector('#pauseVoice').onclick = function () {
    wx.pauseVoice({
      localId: voice.localId
    });
  };

  // 4.7 ֹͣ������Ƶ
  document.querySelector('#stopVoice').onclick = function () {
    wx.stopVoice({
      localId: voice.localId
    });
  };

  // 4.8 ����¼������ֹͣ
  wx.onVoicePlayEnd({
    complete: function (res) {
      alert('¼����' + res.localId + '�����Ž���');
    }
  });

  // 4.8 �ϴ�����
  document.querySelector('#uploadVoice').onclick = function () {
    if (voice.localId == '') {
      alert('����ʹ�� startRecord �ӿ�¼��һ������');
      return;
    }
    wx.uploadVoice({
      localId: voice.localId,
      success: function (res) {
        alert('�ϴ������ɹ���serverId Ϊ' + res.serverId);
        voice.serverId = res.serverId;
      }
    });
  };

  // 4.9 ��������
  document.querySelector('#downloadVoice').onclick = function () {
    if (voice.serverId == '') {
      alert('����ʹ�� uploadVoice �ϴ�����');
      return;
    }
    wx.downloadVoice({
      serverId: voice.serverId,
      success: function (res) {
        alert('���������ɹ���localId Ϊ' + res.localId);
        voice.localId = res.localId;
      }
    });
  };

  // 5 ͼƬ�ӿ�
  // 5.1 ���ա�����ѡͼ
  var images = {
    localId: [],
    serverId: []
  };
  document.querySelector('#chooseImage').onclick = function () {
    wx.chooseImage({
      success: function (res) {
        images.localId = res.localIds;
        alert('��ѡ�� ' + res.localIds.length + ' ��ͼƬ');
      }
    });
  };

  // 5.2 ͼƬԤ��
  document.querySelector('#previewImage').onclick = function () {
    wx.previewImage({
      current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
      urls: [
        'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
        'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
        'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
      ]
    });
  };

  // 5.3 �ϴ�ͼƬ
  document.querySelector('#uploadImage').onclick = function () {
    if (images.localId.length == 0) {
      alert('����ʹ�� chooseImage �ӿ�ѡ��ͼƬ');
      return;
    }
    var i = 0, length = images.localId.length;
    images.serverId = [];
    function upload() {
      wx.uploadImage({
        localId: images.localId[i],
        success: function (res) {
          i++;
          //alert('���ϴ���' + i + '/' + length);
          images.serverId.push(res.serverId);
          if (i < length) {
            upload();
          }
        },
        fail: function (res) {
          alert(JSON.stringify(res));
        }
      });
    }
    upload();
  };

  // 5.4 ����ͼƬ
  document.querySelector('#downloadImage').onclick = function () {
    if (images.serverId.length === 0) {
      alert('����ʹ�� uploadImage �ϴ�ͼƬ');
      return;
    }
    var i = 0, length = images.serverId.length;
    images.localId = [];
    function download() {
      wx.downloadImage({
        serverId: images.serverId[i],
        success: function (res) {
          i++;
          alert('�����أ�' + i + '/' + length);
          images.localId.push(res.localId);
          if (i < length) {
            download();
          }
        }
      });
    }
    download();
  };

  // 6 �豸��Ϣ�ӿ�
  // 6.1 ��ȡ��ǰ����״̬
  document.querySelector('#getNetworkType').onclick = function () {
    wx.getNetworkType({
      success: function (res) {
        alert(res.networkType);
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 7 ����λ�ýӿ�
  // 7.1 �鿴����λ��
  document.querySelector('#openLocation').onclick = function () {
    wx.openLocation({
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'TIT ����԰',
      address: '�����к������¸���· 397 ��',
      scale: 14,
      infoUrl: 'http://weixin.qq.com'
    });
  };

  // 7.2 ��ȡ��ǰ����λ��
  document.querySelector('#getLocation').onclick = function () {
    wx.getLocation({
      success: function (res) {
        alert(JSON.stringify(res));
      },
      cancel: function (res) {
        alert('�û��ܾ���Ȩ��ȡ����λ��');
      }
    });
  };

  // 8 ��������ӿ�
  // 8.1 �������Ͻǲ˵�
  document.querySelector('#hideOptionMenu').onclick = function () {
    wx.hideOptionMenu();
  };

  // 8.2 ��ʾ���Ͻǲ˵�
  document.querySelector('#showOptionMenu').onclick = function () {
    wx.showOptionMenu();
  };

  // 8.3 �������ز˵���
  document.querySelector('#hideMenuItems').onclick = function () {
    wx.hideMenuItems({
      menuList: [
        'menuItem:readMode', // �Ķ�ģʽ
        'menuItem:share:timeline', // ����������Ȧ
        'menuItem:copyUrl' // ��������
      ],
      success: function (res) {
        alert('�����ء��Ķ�ģʽ����������������Ȧ�������������ӡ��Ȱ�ť');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 8.4 ������ʾ�˵���
  document.querySelector('#showMenuItems').onclick = function () {
    wx.showMenuItems({
      menuList: [
        'menuItem:readMode', // �Ķ�ģʽ
        'menuItem:share:timeline', // ����������Ȧ
        'menuItem:copyUrl' // ��������
      ],
      success: function (res) {
        alert('����ʾ���Ķ�ģʽ����������������Ȧ�������������ӡ��Ȱ�ť');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 8.5 �������зǻ����˵���
  document.querySelector('#hideAllNonBaseMenuItem').onclick = function () {
    wx.hideAllNonBaseMenuItem({
      success: function () {
        alert('���������зǻ����˵���');
      }
    });
  };

  // 8.6 ��ʾ���б����صķǻ����˵���
  document.querySelector('#showAllNonBaseMenuItem').onclick = function () {
    wx.showAllNonBaseMenuItem({
      success: function () {
        alert('����ʾ���зǻ����˵���');
      }
    });
  };

  // 8.7 �رյ�ǰ����
  document.querySelector('#closeWindow').onclick = function () {
    wx.closeWindow();
  };

  // 9 ΢��ԭ���ӿ�
  // 9.1.1 ɨ���ά�벢���ؽ��
  document.querySelector('#scanQRCode0').onclick = function () {
    wx.scanQRCode();
  };
  // 9.1.2 ɨ���ά�벢���ؽ��
  document.querySelector('#scanQRCode1').onclick = function () {
    wx.scanQRCode({
      needResult: 1,
      desc: 'scanQRCode desc',
      success: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };

  // 10 ΢��֧���ӿ�
  // 10.1 ����һ��֧������
  document.querySelector('#chooseWXPay').onclick = function () {
    // ע�⣺�� Demo ʹ�� 2.7 �汾֧���ӿ�ʵ�֣�����ʹ�ô˽ӿ�ʱ�ο�΢��֧����������ĵ���
    wx.chooseWXPay({
      timestamp: 1414723227,
      nonceStr: 'noncestr',
      package: 'addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D',
      signType: 'SHA1', // ע�⣺�°�֧���ӿ�ʹ�� MD5 ����
      paySign: 'bd5b1933cda6e9548862944836a9b52e8c9a2b69'
    });
  };

  // 11.3  ��ת΢����Ʒҳ
  document.querySelector('#openProductSpecificView').onclick = function () {
    wx.openProductSpecificView({
      productId: 'pDF3iY_m2M7EQ5EKKKWd95kAxfNw',
      extInfo: '123'
    });
  };

  // 12 ΢�ſ�ȯ�ӿ�
  // 12.1 ���ӿ�ȯ
  document.querySelector('#addCard').onclick = function () {
    wx.addCard({
      cardList: [
        {
          cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
          cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
        },
        {
          cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
          cardExt: '{"code": "", "openid": "", "timestamp": "1418301401", "signature":"f6628bf94d8e56d56bfa6598e798d5bad54892e5"}'
        }
      ],
      success: function (res) {
        alert('�����ӿ�ȯ��' + JSON.stringify(res.cardList));
      },
      cancel: function (res) {
        alert(JSON.stringify(res))
      }
    });
  };

  var codes = [];
  // 12.2 ѡ��ȯ
  document.querySelector('#chooseCard').onclick = function () {
    wx.chooseCard({
      cardSign: '1fdb2640c60e41f8823e9f762e70c531d161ae76',
      timestamp: 1437997723,
      nonceStr: 'k0hGdSXKZEj3Min5',
      success: function (res) {
        res.cardList = JSON.parse(res.cardList);
        encrypt_code = res.cardList[0]['encrypt_code'];
        alert('��ѡ��ȯ��' + JSON.stringify(res.cardList));
        decryptCode(encrypt_code, function (code) {
          codes.push(code);
        });
      },
      cancel: function (res) {
        alert(JSON.stringify(res))
      }
    });
  };

  // 12.3 �鿴��ȯ
  document.querySelector('#openCard').onclick = function () {
    if (codes.length < 1) {
      alert('����ʹ�� chooseCard �ӿ�ѡ��ȯ��');
      return false;
    }
    var cardList = [];
    for (var i = 0; i < codes.length; i++) {
      cardList.push({
        cardId: 'pDF3iY9tv9zCGCj4jTXFOo1DxHdo',
        code: codes[i]
      });
    }
    wx.openCard({
      cardList: cardList,
      cancel: function (res) {
        alert(JSON.stringify(res))
      }
    });
  };

  var shareData = {
    title: '΢��JS-SDK Demo',
    desc: '΢��JS-SDK,����������Ϊ�û��ṩ�����ʵ��ƶ�web����',
    link: 'http://demo.open.weixin.qq.com/jssdk/',
    imgUrl: 'http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0'
  };
  wx.onMenuShareAppMessage(shareData);
  wx.onMenuShareTimeline(shareData);

  function decryptCode(code, callback) {
    $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code), function (res) {
      if (res.errcode == 0) {
        codes.push(res.code);
      }
    });
  }
});

wx.error(function (res) {
  alert(res.errMsg);
});
