/*
 * 自定义入口：可以直接修改这个文件来替换作品、价格和接单状态。
 * 路径为相对 index.html 的路径，如 assets/works/my-doll.jpg。
 * 来图代缝价格仅供估算，需人工确认的项目不会自动做出确定报价。
 */
window.NUNU_CONFIG = {
  studioName: 'AYUE ATELIER · 阿月的努努工坊',
  status: 'queued', // open | queued | closed；首次使用前请手动修改
  statusText: { open: '正在开放约单', queued: '档期请先咨询', closed: '暂时休息中 · 暂停新单' },
  version: '1.2.0',
  contact: { qq: '', wechat: '' }, // 发布前填写你自己的联系账号；未填写时网站不会虚构联系方式
  pricing: {
    baseSewing: 100,
    drawingMin: 30, drawingMax: 60,
    downHands: 5, rearHairMin: 5, rearHairMax: 10,
    earsMin: 5, earsMax: 15, braidEach: 5, ponyEach: 5,
    ownFace: 10, checkpointEditEach: 5,
    schedules: {
      regular: { name: '常规排单', factor: 1, description: '排到后 10 天内' },
      priority: { name: '提前排 / 加塞', factor: 1.5, description: '排到后 10 天内，不代表加急' },
      rush: { name: '加急制作', factor: 2, description: '材料到手后 5 天内' },
      super: { name: '超级加急', factor: 3, description: '材料到手后 48 小时内 · 需先询问' }
    },
    privateDisplayFactor: 2
  },
  // 作品展示的 6 张为原创演示插画，非真实已交付客单。
  // 修改 demo:false 后将不再显示“示例占位”标签。
  works: [
    {id:'demo-01', title:'莓莓兔 · 展示位置', category:'sewing', tag:'示意插画', image:'assets/demo/doll-01.svg', description:'在这里替换为一只真实努努的成品照片，并补充制作亮点。', demo:true},
    {id:'demo-02', title:'薄荷糖 · 展示位置', category:'sewing', tag:'示意插画', image:'assets/demo/doll-02.svg', description:'建议搭配来自同一委托的正面、背面与细节图。', demo:true},
    {id:'demo-03', title:'莓果奶盖 · 展示位置', category:'face', tag:'示意插画', image:'assets/demo/doll-03.svg', description:'面皮刺绣细节和个性化要求可以在这里说明。', demo:true},
    {id:'demo-04', title:'奶油星星 · 展示位置', category:'sewing', tag:'示意插画', image:'assets/demo/doll-04.svg', description:'展示特别的耳朵、发片或身体结构。', demo:true},
    {id:'demo-05', title:'海盐汽水 · 展示位置', category:'face', tag:'示意插画', image:'assets/demo/doll-05.svg', description:'展示头发结构与特殊工艺。', demo:true},
    {id:'demo-06', title:'樱桃泡泡 · 展示位置', category:'personal', tag:'示意插画', image:'assets/demo/doll-06.svg', description:'自己的创意和个人作品也可以放在这里。', demo:true}
  ],
  rules: [
    ['排单与付款', '常规可采用 50% 定金加尾款，也可提出微信 / QQ 后付或走闲鱼开全款链接。上述只是付款偏好，须与工作室先确认是否接受；付款、平台交易及排单按双方约定执行。口头预约不占用档期。'],
    ['工期与物流', '工期均指手工制作时间，不含物流。常单排到后 10 天内；加塞仅提前排期，并不缩短正常工期。加急、超级加急需要提前确认可承接。'],
    ['材料和邮费', '¥100 起包含常规材料，特殊布料（如双拼、渐变）及复杂工艺可能另计。默认半包车马费，三只及以上全包；偏远地区按约定最多补贴 ¥10，实际以沟通为准。'],
    ['图纸与版权', '单主须保证提交的图纸获得必要的制作授权。对无法制作、存在明显版权争议或设计问题较大的图纸，工作室可拒绝接单。'],
    ['成品展示', '默认同意工作室公开展示成品；如希望不展示，需在约单前说明，参考价格为总价 ×2。原始图纸的展示权限需单独获得授权。'],
    ['手作与修改', '手工制品难免存在合理误差与小瑕疵。衣服→表情→头发等节点逐一确认，已确认节点再改动每次参考 +¥5，实际能否修改视工序而定。'],
    ['取消与补偿', '如发生取消、跑单、超期或制作问题，双方应先沟通实际情况及费用明细。参考规则中存在 30% 跑单费及邮费安排；正式扣费、退费和补偿须结合已发生费用与适用法律合理协商。'],
    ['未成年人', '未成年人约单前应征得监护人同意。售后按实际订单约定与适用规则处理，不以未成年身份当然免除或加重责任。']
  ],
  faq: [
    ['没有图纸也能约吗？', '可以选择“努努一条龙”，将图纸绘制与实体制作一并沟通；目前不单独提供“图纸绘制”下单选项。来图代缝需提供图纸参考。'],
    ['一次可以约两只、三只吗？', '可以。表单可以给每只努努分别填写资料和上传图片，联系方式及排单方式只填写一次。'],
    ['填写网站后就算排单吗？', '不算。网站只整理需求并导出 ZIP，请通过 QQ / 微信联系工作室。双方确认档期与最终价格且完成约定付款后，才视作正式排单。'],
    ['加塞和加急有什么区别？', '加塞是提前排队，排到后仍按正常 10 天制作；加急按材料到手后 5 天，超级加急为 48 小时，是否可接需人工确认。'],
    ['付款可以微信 / QQ 后付，或者走闲鱼吗？', '可以在表单中选择微信 / QQ 后付或闲鱼全款链接作为偏好，是否接受后付及闲鱼下单规则，仍需事先协商。网站本身不收款或创建真实闲鱼链接。'],
    ['参考图可以是多张吗？', '可以。每只娃娃可按正面、背面、表情、头发、服装及其他分类上传多张图片。网站在本地将它们打包，不主动上传云端。'],
    ['可以完全不公开成品吗？', '可以在表单中选择“不可展示”，会提示参考价格倍率。原图纸和成品照片分别管理展示权限。']
  ]
};
