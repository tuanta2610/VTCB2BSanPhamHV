const impact=[['I','Identify','Xác định vấn đề'],['M','Map','Phân tích quy trình'],['P','Produce','Xây dựng giải pháp'],['A','Assess','Đánh giá kết quả'],['C','Connect','Kết nối và tích hợp'],['T','Transform','Cải tiến và chuyển đổi']];
const create=[['C','Context','Hiểu bối cảnh'],['R','Resources','Khai thác nguồn lực'],['E','Execution','Năng lực thực thi'],['A','Architecture','Thiết kế hệ thống'],['T','Trust','An toàn và tin cậy'],['E','Excellence','Cải tiến liên tục']];
const frameworkExplanations={
  impact:[
    'Làm rõ vấn đề, đối tượng sử dụng, mục tiêu học tập và giá trị cần tạo ra.',
    'Vẽ lại hành trình, dữ liệu, điểm nghẽn và các bước trong quy trình hiện tại.',
    'Đề xuất giải pháp AI và xây dựng bản nháp sản phẩm để thử nghiệm.',
    'Đặt tiêu chí đánh giá, kiểm tra chất lượng và so sánh với cách làm ban đầu.',
    'Kết nối tri thức, dữ liệu, công cụ AI, workflow và sản phẩm số.',
    'Cải tiến liên tục và chuyển hóa giải pháp thành hiệu quả thực tế.'
  ],
  create:[
    'Làm rõ người dùng, bối cảnh, phạm vi, mục tiêu và các ràng buộc.',
    'Chọn tài liệu, dữ liệu, con người và công cụ AI phù hợp, có nguồn xác thực.',
    'Thiết kế prompt, thực hiện tác vụ, kiểm thử và hoàn thiện đầu ra.',
    'Tổ chức thành workflow, phân vai Human–AI và thiết kế các điểm kiểm soát.',
    'Bảo vệ dữ liệu, tuân thủ bản quyền, kiểm chứng nguồn và phê duyệt bởi con người.',
    'Đo lường hiệu quả, tối ưu quy trình và nâng cấp chất lượng lâu dài.'
  ]
};
function mountFramework(kind,rows){
 const grid=document.getElementById(kind+'Steps');const detail=document.getElementById(kind+'Detail');
 grid.innerHTML=rows.map(([letter,en,vi],i)=>`<button type="button" class="fw-step ${i===0?'is-selected':''}" data-i="${i}" aria-pressed="${i===0}"><span class="fw-step-index">0${i+1}</span><span class="fw-step-letter">${letter}</span><span class="fw-step-name">${en}</span><span class="fw-step-vi">${vi}</span><span class="fw-step-arrow" aria-hidden="true">↗</span></button>`).join('');
 const select=i=>{const [letter,en,vi]=rows[i];detail.innerHTML=`<span class="fw-detail-count">BƯỚC 0${i+1} / 06</span><div><strong>${en}</strong><span>${vi} · ${frameworkExplanations[kind][i]}</span></div><span class="fw-detail-indicator" aria-hidden="true">✦</span>`;grid.querySelectorAll('.fw-step').forEach((el,n)=>{el.classList.toggle('is-selected',n===i);el.setAttribute('aria-pressed',String(n===i))})};
 grid.addEventListener('click',e=>{const btn=e.target.closest('.fw-step');if(btn)select(Number(btn.dataset.i))});
 grid.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowDown','ArrowUp'].includes(e.key))return;const active=document.activeElement.closest('.fw-step');if(!active)return;e.preventDefault();const delta=e.key==='ArrowRight'||e.key==='ArrowDown'?1:-1;const i=(Number(active.dataset.i)+delta+rows.length)%rows.length;select(i);grid.querySelectorAll('.fw-step')[i].focus()});
 select(0);
}
mountFramework('impact',impact);mountFramework('create',create);
const mods=[
{n:'01',name:'Tư duy & thiết kế quy trình AI',short:'TƯ DUY GIẢI QUYẾT VẤN ĐỀ',tag:'IMPACT + CREATE',sessions:[['AI Opportunity Discovery','Phân tích nhu cầu, tìm tiềm năng AI trong học tập, nghiên cứu và dự án chuyên ngành.'],['AI Workflow Design','Thiết kế workflow tích hợp AI để tối ưu quy trình và bài toán thực tế.']]},
{n:'02',name:'Quản lý tri thức & giao việc cho AI',short:'PROMPT & KNOWLEDGE',tag:'ChatGPT · Notion AI · NotebookLM',sessions:[['Prompt Engineering','Xây dựng và tối ưu câu lệnh AI theo mục tiêu học tập và nghiên cứu.'],['AI Knowledge Management','Quản lý nguồn tài liệu và kho kiến thức chuyên ngành.']]},
{n:'03',name:'Sáng tạo nội dung & sản phẩm AI',short:'CONTENT & CREATIVE',tag:'Multimedia',sessions:[['AI Content Creation','Tạo nội dung học thuật đa phương tiện phục vụ học tập, thuyết trình, báo cáo và dự án.'],['AI Branding & Communication','Xây dựng thương hiệu cá nhân, hồ sơ năng lực và truyền thông học thuật.']]},
{n:'04',name:'Phân tích dữ liệu & tự động hóa',short:'DATA & AUTOMATION',tag:'Analytics · n8n',sessions:[['AI Data Analytics','Phân tích dữ liệu học tập, khảo sát, nghiên cứu và báo cáo trực quan.'],['AI Workflow Automation','Tự động hóa thu thập tài liệu, tổng hợp thông tin và phân tích báo cáo.']]},
{n:'05',name:'Xây dựng website & AI chatbot',short:'WEB & AI ASSISTANT',tag:'Vibe Coding',sessions:[['AI-Powered Web Development','Tạo website học tập, portfolio và sản phẩm bằng AI/Vibe Coding.'],['AI Chatbot Development','Xây dựng chatbot AI tra cứu kiến thức, giải đáp và hướng dẫn.']]}];
document.querySelector('#moduleGrid').innerHTML=mods.map((m,i)=>`<article class="module ${i===0?'expanded':''}"><button class="module-header" aria-expanded="${i===0}"><div class="module-index">${m.n}</div><div class="module-head-text"><small>MODULE ${m.n} / ${m.short}</small><h3>${m.name}</h3></div><span class="module-toggle">+</span></button><div class="module-detail"><div class="module-tag">${m.tag}</div>${m.sessions.map((s,j)=>`<div class="session"><span>BUỔI ${String(i*2+j+1).padStart(2,'0')}</span><div><b>${s[0]}</b><p>${s[1]}</p></div></div>`).join('')}</div></article>`).join('');
document.querySelectorAll('.module-header').forEach(btn=>btn.addEventListener('click',()=>{const parent=btn.closest('.module');let on=!parent.classList.contains('expanded');parent.classList.toggle('expanded',on);btn.setAttribute('aria-expanded',on)}));
const safe=s=>String(s??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
document.querySelector('#studentDirectory').innerHTML=window.STUDENTS.map((s,i)=>`<a class="directory-card" href="${safe(s.page)}" style="--accent:${safe(s.color)}"><div class="directory-pic"><img src="${safe(s.images.profile)}" alt="Ảnh nhân vật minh họa ${safe(s.name)}" loading="lazy"></div><div class="directory-info"><span class="directory-label">CASE STUDY 0${i+1} · ${safe(s.major)}</span><h3>${safe(s.project)}</h3><h4>${safe(s.name)}</h4><p>${safe(s.profileText.problem)}</p><span class="directory-action">Xem bài toán & 4 sản phẩm <b>↗</b></span></div></a>`).join('');
const menu=document.querySelector('#menuBtn');menu.addEventListener('click',()=>document.querySelector('#navLinks').classList.toggle('open'));document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#navLinks').classList.remove('open')));
window.addEventListener('scroll',()=>{let d=document.documentElement;document.querySelector('#progress').style.width=(100*d.scrollTop/Math.max(1,d.scrollHeight-d.clientHeight))+'%'},{passive:true});

const journeyModal=document.getElementById('journeyModal');
const journeyOpen=document.getElementById('journeyOpen');
const journeyClose=document.getElementById('journeyClose');
if(journeyModal&&journeyOpen){journeyOpen.addEventListener('click',()=>{journeyModal.classList.add('open');journeyModal.setAttribute('aria-hidden','false');journeyClose.focus()});journeyClose.addEventListener('click',()=>{journeyModal.classList.remove('open');journeyModal.setAttribute('aria-hidden','true')});journeyModal.addEventListener('click',e=>{if(e.target===journeyModal)journeyClose.click()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&journeyModal.classList.contains('open'))journeyClose.click()})}
