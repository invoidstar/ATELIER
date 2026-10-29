/*
 * 自定义入口：可以直接修改这个文件来替换作品、价格和接单状态。
 * 路径为相对 index.html 的路径，如 assets/works/my-doll.jpg。
 * 来图代缝价格仅供估算，需人工确认的项目不会自动做出确定报价。
 */
window.NUNU_CONFIG = {
  studioName: 'AYUE ATELIER · 阿月的努努工坊',
  status: 'queued', // open | queued | closed；首次使用前请手动修改
  statusText: { open: '正在开放约单', queued: '档期请先咨询', closed: '暂时休息中 · 暂停新单' },
  version: '1.4.0',
  contact: { qq: '', wechat: '' }, // 发布前填写你自己的联系账号；未填写时网站不会虚构联系方式
  pricing: {
    baseSewing: 100,
    drawingMin: 30, drawingMax: 60,
    downHands: 5, rearHairMin: 5, rearHairMax: 10,
    earStyle1: 10, earStyle2: 14, frontHairExtraLayer: 2, braidEach: 5, ponyEach: 5,
    ownFace: 10, embroideryBase: 35, embroideryIncludedColors: 5, embroideryExtraColor: 3, checkpointEditEach: 5,
    schedules: {
      regular: { name: '常规排单', factor: 1, description: '排到后 15 天内' },
      priority: { name: '提前排 / 加塞', factor: 1.5, description: '排到后 15 天内，不代表加急' },
      rush: { name: '加急制作', factor: 2, description: '材料到手后 5 天内' },
      super: { name: '超级加急', factor: 3, description: '材料到手后 48 小时内 · 需先询问' }
    },
    privateDisplayFactor: 2
  },
  // 用户提供的实际手工照片；正式公开前请确认相应作品与图纸展示权限。
  works: [
    {id:'work-01', title:'薄荷色双马尾', category:'single', tag:'单只成品', image:'assets/works/atelier-work-01.webp', description:'清透的薄荷色双马尾与细致的面皮表情。', imageFit:'cover'},
    {id:'work-02', title:'蓝黑色礼装', category:'single', tag:'单只成品', image:'assets/works/atelier-work-02.webp', description:'蓝黑配色与层叠造型的手工细节。', imageFit:'cover'},
    {id:'work-03', title:'晴蓝与橘金', category:'pair', tag:'双只组合', image:'assets/works/atelier-work-03.webp', description:'两种配色的努努一起出镜，方便对比不同面皮与发型。', imageFit:'cover'},
    {id:'work-04', title:'白与黑的搭档', category:'pair', tag:'双只组合', image:'assets/works/atelier-work-04.webp', description:'双色搭档的造型展示，突出头发轮廓与服饰还原。', imageFit:'cover'},
    {id:'work-05', title:'双人手作记录', category:'pair', tag:'双只组合', image:'assets/works/atelier-work-05.webp', description:'同组作品的不同角度与细节组合照片。', imageFit:'cover'},
    {id:'work-06', title:'彩色努努合集', category:'collection', tag:'作品合集', image:'assets/works/atelier-work-06.webp', description:'多种发色和造型的手工记录，展示不同娃娃的变化。', imageFit:'contain'},
    {id:'work-07', title:'角色造型合集', category:'collection', tag:'作品合集', image:'assets/works/atelier-work-07.webp', description:'多款发型、衣饰与面皮风格的成品记录。', imageFit:'contain'},
    {id:'work-08', title:'设计与成品 · 机甲风', category:'compare', tag:'设计对照', image:'assets/works/atelier-work-08.webp', description:'展示设计参考与成品的并列记录。参考图版权归原作者所有。', imageFit:'contain'},
    {id:'work-09', title:'设计与成品 · 双造型', category:'compare', tag:'设计对照', image:'assets/works/atelier-work-09.webp', description:'以组合拼图的形式呈现图纸与实际成品的区别。参考图版权归原作者所有。', imageFit:'contain'}
  ],
  rules: [
    ['排单与付款', '目前填写时可选择微信 / QQ 后付或走闲鱼开全款链接。两者都只是付款偏好，须由双方确认交易方式及排单时间；网页不直接收款，口头预约不占用档期。'],
    ['工期与物流', '工期均指手工制作时间，不含物流。常单排到后 15 天内；加塞仅提前排期，并不缩短正常工期。加急、超级加急需要提前确认可承接。'],
    ['材料和邮费', '¥100 起包含常规材料；头发默认 1mm 水晶超柔，需要其他布料请在订单中注明。特殊布料（如双拼、渐变）及复杂工艺可能另计。额外刺绣面皮 ¥35 起，包含 5 色刺绣线，超过 5 色每多 1 色 +¥3。默认半包车马费，三只及以上全包；偏远地区按约定最多补贴 ¥10，实际以沟通为准。'],
    ['图纸与版权', '单主须保证提交的图纸获得必要的制作授权。对无法制作、存在明显版权争议或设计问题较大的图纸，工作室可拒绝接单。'],
    ['成品展示', '默认同意工作室公开展示成品；如希望不展示，需在约单前说明，参考价格为总价 ×2。原始图纸的展示权限需单独获得授权。'],
    ['手作与修改', '手工制品难免存在合理误差与小瑕疵。衣服→表情→头发等节点逐一确认，已确认节点再改动每次参考 +¥5，实际能否修改视工序而定。'],
    ['取消与补偿', '如发生取消、跑单、超期或制作问题，双方应先沟通实际情况及费用明细。参考规则中存在 30% 跑单费及邮费安排；正式扣费、退费和补偿须结合已发生费用与适用法律合理协商。'],
    ['未成年人', '未成年人约单前应征得监护人同意。售后按实际订单约定与适用规则处理，不以未成年身份当然免除或加重责任。']
  ],
  faq: [
    ['没有图纸也能约吗？', '可以选择“努努一条龙”，将图纸绘制与实体制作一并沟通；目前不单独提供“图纸绘制”下单选项。来图代缝需提供图纸参考。'],
    ['一次可以约两只、三只吗？', '可以。表单可以给每只努努分别填写资料和上传图片，联系方式及排单方式只填写一次。'],
    ['填写网站后就算排单吗？', '不算。网站只整理需求并导出 ZIP，请通过你实际使用的 QQ / 微信、闲鱼或画加渠道联系工作室。双方确认档期与最终价格且完成约定付款后，才视作正式排单。'],
    ['加塞和加急有什么区别？', '加塞只影响排队优先级，排到后仍是 15 天工期，不等于加急。加急按材料到手后 5 天，超级加急为 48 小时，是否可接需人工确认。'],
    ['付款可以微信 / QQ 后付，或者走闲鱼吗？', '可以在表单中选择微信 / QQ 后付或闲鱼全款链接作为偏好，是否接受后付及闲鱼下单规则，仍需事先协商。网站本身不收款或创建真实闲鱼链接。'],
    ['参考图可以是多张吗？', '可以。每只努努可在「人物正面」「人物背面」「其他参考」三个位置上传多张图片。网站会在浏览器本地打包，不主动上传云端。'],
    ['兽耳如何选择？', '有两种参考款式：款式一 ¥10 / 对、款式二 ¥14 / 对。下单时请在制作选项里看图二选一；具体仍以确认的图纸与做法为准。'],
    ['前发片超过三层怎么收费？', '前发片前 3 层不另收费，超过 3 层的部分每层 +¥2。例如 5 层额外 +¥4。'],
    ['额外刺绣面皮怎么计算？', '¥35 起包含 5 色刺绣线，第 6 色起每多 1 色 +¥3。填写线色数量后网站会计算最低参考价，具体工艺及最终费用仍需沟通。'],
    ['可以完全不公开成品吗？', '可以在表单中选择“不可展示”，会提示参考价格倍率。原图纸和成品照片分别管理展示权限。']
  ]
};