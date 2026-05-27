let currentIdx = 0;
let answers = {};   // idx -> chosen opt index
let results = {};   // idx -> 'correct'|'wrong'
let mode = 'practice';
let startTime, elapsedTime=0;
let timerInterval, questionTimer, globalTimerInterval;
let retryData = null;
let panelOpen = false;

// ===========================
// HOME
// ===========================


function startQuiz(){
  const params = new URLSearchParams(window.location.search);
  mode = params.get('mode') || 'practice';
  let numQ = parseInt(params.get('num')) || 30;
  let startFrom = parseInt(params.get('start')) || 1;
  
  const subject = params.get('subject') || 'csdl';
  let rawData = RAW_QUESTIONS;
  if(typeof ONTAPMAU_QUESTIONS !== 'undefined' && subject === 'ontapmau') {
    rawData = ONTAPMAU_QUESTIONS;
  }
  
  if(mode==='review'){
    questions = rawData.map((q,i)=>({...q,origIdx:i}));
  } else {
    let pool = rawData.slice(startFrom-1);
    // shuffle
    pool = pool.map((q,i)=>({...q,origIdx:startFrom-1+i})).sort(()=>Math.random()-0.5);
    questions = pool.slice(0, Math.min(numQ, pool.length));
  }
  
  answers = {}; results = {}; currentIdx = 0;
  startTime = Date.now();
  
  showScreen('quiz-screen');
  buildNavGrid();
  renderQuestion();
  
  if(mode==='timed') startTimerBadge();
  if(mode==='exam') {
    let totalSec = questions.length * 48; // 25 câu = 20 phút (1200 giây)
    startGlobalTimer(totalSec);
  }
  if(mode==='review') enterReviewMode();
}

function enterReviewMode(){
  // Show all answers immediately
  questions.forEach((_,i)=>{ answers[i]=questions[i].ans; results[i]='correct'; });
  document.getElementById('btn-submit').style.display='none';
  document.getElementById('btn-end-quiz').textContent='Xong ✓';
}

// ===========================
// NAVIGATION PANEL
// ===========================
function buildNavGrid(){
  const grid = document.getElementById('nav-grid');
  grid.innerHTML='';
  questions.forEach((_,i)=>{
    const b=document.createElement('button');
    b.className='nav-btn'; b.textContent=i+1;
    b.onclick=()=>jumpTo(i);
    b.id=`nav-${i}`;
    grid.appendChild(b);
  });
}

function updateNavBtn(i){
  const b=document.getElementById(`nav-${i}`);
  if(!b) return;
  b.className='nav-btn';
  if(results[i]==='correct') b.classList.add('correct');
  else if(results[i]==='wrong') b.classList.add('wrong');
  else if(answers[i]!==undefined) b.classList.add('answered');
  
  if(i===currentIdx) b.classList.add('current');
}

function togglePanel(){
  panelOpen=!panelOpen;
  const p=document.getElementById('nav-panel');
  if(panelOpen) p.classList.add('show'); else p.classList.remove('show');
}

// ===========================
// TIMER
// ===========================
function startTimerBadge(){
  const badge=document.getElementById('timer-badge');
  badge.style.display='block';
  let sec=60;
  badge.textContent='1:00';
  badge.classList.remove('danger');
  clearInterval(questionTimer);
  questionTimer=setInterval(()=>{
    sec--;
    const m=Math.floor(sec/60), s=sec%60;
    badge.textContent=`${m}:${s<10?'0':''}${s}`;
    if(sec<=10) badge.classList.add('danger');
    if(sec<=0){
      clearInterval(questionTimer);
      // auto next
      if(answers[currentIdx]===undefined) answers[currentIdx]=-1;
      if(currentIdx<questions.length-1) nextQ();
      else endQuiz();
    }
  },1000);
}

function startGlobalTimer(totalSec){
  const badge=document.getElementById('timer-badge');
  badge.style.display='block';
  let sec=totalSec;
  
  const updateBadge = () => {
    const m=Math.floor(sec/60), s=sec%60;
    badge.textContent=`${m}:${s<10?'0':''}${s}`;
    if(sec<=60) badge.classList.add('danger');
    else badge.classList.remove('danger');
  };
  
  updateBadge();
  clearInterval(globalTimerInterval);
  globalTimerInterval=setInterval(()=>{
    sec--;
    updateBadge();
    if(sec<=0){
      clearInterval(globalTimerInterval);
      alert('Đã hết thời gian làm bài!');
      endQuiz();
    }
  },1000);
}

// ===========================
// RENDER QUESTION
// ===========================
function renderQuestion(){
  const q=questions[currentIdx];
  const total=questions.length;
  
  // Header
  document.getElementById('q-counter').textContent=`Câu ${currentIdx+1}/${total}`;
  const correct=Object.values(results).filter(r=>r==='correct').length;
  const wrong=Object.values(results).filter(r=>r==='wrong').length;
  document.getElementById('q-score-live').innerHTML=`✓ ${correct} &nbsp;✗ ${wrong}`;
  document.getElementById('progress-fill').style.width=`${((currentIdx+1)/total)*100}%`;
  
  // Question tag
  document.getElementById('q-tag').textContent=`📌 Câu ${currentIdx+1} (Gốc: #${q.origIdx+1})`;
  document.getElementById('question-text').textContent=q.q;
  
  // Options
  const ol=document.getElementById('options-list');
  ol.innerHTML='';
  const letters=['A','B','C','D'];
  q.opts.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.id=`opt-${i}`;
    btn.innerHTML=`<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.onclick=()=>selectOption(i);
    ol.appendChild(btn);
  });
  
  // Explanation
  document.getElementById('explanation-box').classList.remove('show');
  document.getElementById('explanation-box').textContent='';
  
  // Restore state if already answered
  if(answers[currentIdx]!==undefined){
    restoreAnswerState();
  }
  
  // Buttons
  const submitted=results[currentIdx]!==undefined;
  const btnSubmit=document.getElementById('btn-submit');
  if(mode==='review'){
    btnSubmit.style.display='none';
  } else if(mode==='exam'){
    btnSubmit.style.display='none';
  } else {
    btnSubmit.style.display='inline-block';
    btnSubmit.disabled=answers[currentIdx]===undefined;
    if(submitted) { btnSubmit.disabled=true; btnSubmit.textContent='Đã kiểm tra ✓'; }
    else btnSubmit.textContent='Kiểm tra';
  }
  
  document.getElementById('btn-prev').disabled=currentIdx===0;
  document.getElementById('btn-next').disabled=currentIdx===total-1;
  
  // Nav
  questions.forEach((_, i) => updateNavBtn(i));
  
  // Timer
  if(mode==='timed' && results[currentIdx]===undefined) startTimerBadge();
  
  // Scroll to top of main
  document.querySelector('.quiz-main').scrollTo(0,0);
}

function restoreAnswerState(){
  const q=questions[currentIdx];
  const chosen=answers[currentIdx];
  const submitted=results[currentIdx]!==undefined;
  const letters=['A','B','C','D'];
  
  q.opts.forEach((_,i)=>{
    const btn=document.getElementById(`opt-${i}`);
    if(!btn) return;
    if(i===chosen) btn.classList.add('selected');
    if(submitted || mode==='review'){
      btn.disabled=true;
      if(i===q.ans) btn.classList.add('correct-ans');
      else if(i===chosen && i!==q.ans) btn.classList.add('wrong-ans');
    }
  });
  
  if(submitted && mode==='practice'){
    const expBox=document.getElementById('explanation-box');
    expBox.textContent=`✓ Đáp án đúng: ${letters[q.ans]}. ${q.opts[q.ans]}`;
    expBox.classList.add('show');
  }
}

function selectOption(idx){
  if(results[currentIdx]!==undefined) return; // already submitted
  if(mode==='review') return;
  
  answers[currentIdx]=idx;
  document.querySelectorAll('.option-btn').forEach(b=>b.classList.remove('selected'));
  document.getElementById(`opt-${idx}`).classList.add('selected');
  
  if(mode==='practice'){
    document.getElementById('btn-submit').disabled=false;
  } else if(mode==='exam' || mode==='timed'){
    // no instant check
  }
  
  updateNavBtn(currentIdx);
}

function submitAnswer(){
  if(answers[currentIdx]===undefined) return;
  const q=questions[currentIdx];
  const chosen=answers[currentIdx];
  const isCorrect=chosen===q.ans;
  results[currentIdx]=isCorrect?'correct':'wrong';
  
  // Update options UI
  q.opts.forEach((_,i)=>{
    const btn=document.getElementById(`opt-${i}`);
    if(!btn) return;
    btn.disabled=true;
    if(i===q.ans) btn.classList.add('correct-ans');
    else if(i===chosen && !isCorrect) btn.classList.add('wrong-ans');
  });
  
  // Explanation
  const letters=['A','B','C','D'];
  const expBox=document.getElementById('explanation-box');
  expBox.textContent=isCorrect
    ? `✅ Đúng! Đáp án: ${letters[q.ans]}. ${q.opts[q.ans]}`
    : `❌ Sai! Đáp án đúng: ${letters[q.ans]}. ${q.opts[q.ans]}`;
  expBox.classList.add('show');
  
  document.getElementById('btn-submit').disabled=true;
  document.getElementById('btn-submit').textContent='Đã kiểm tra ✓';
  updateNavBtn(currentIdx);
  
  clearInterval(questionTimer);
  
  // Auto advance in timed/practice mode after 1.5s
  if(mode==='timed'){
    setTimeout(()=>{ if(currentIdx<questions.length-1) nextQ(); },1500);
  }
}

function jumpTo(i){
  currentIdx=i;
  renderQuestion();
}

function prevQ(){
  if(currentIdx>0){ currentIdx--; renderQuestion(); }
}

function nextQ(){
  if(currentIdx<questions.length-1){ currentIdx++; renderQuestion(); }
}

function endQuiz(){
  clearInterval(timerInterval);
  clearInterval(questionTimer);
  clearInterval(globalTimerInterval);
  elapsedTime=Math.floor((Date.now()-startTime)/1000);
  
  // Compute results for exam mode
  if(mode==='exam' || mode==='timed'){
    questions.forEach((_,i)=>{
      if(answers[i]!==undefined && results[i]===undefined){
        results[i]=answers[i]===questions[i].ans?'correct':'wrong';
      }
    });
  }
  
  showResults();
}

// ===========================
// RESULTS
// ===========================
function showResults(){
  const total=questions.length;
  const correct=Object.values(results).filter(r=>r==='correct').length;
  const wrong=Object.values(results).filter(r=>r==='wrong').length;
  const skip=total-Object.keys(results).length;
  const pct=Math.round((correct/total)*100);
  
  document.getElementById('score-pct').textContent=pct+'%';
  document.getElementById('score-circle').style.setProperty('--pct', `${pct*3.6}deg`);
  document.getElementById('rs-correct').textContent=correct;
  document.getElementById('rs-wrong').textContent=wrong;
  document.getElementById('rs-skip').textContent=skip;
  
  const m=Math.floor(elapsedTime/60), s=elapsedTime%60;
  document.getElementById('rs-time').textContent=`${m}:${s<10?'0':''}${s}`;
  
  let emoji='🎉', title='Hoàn thành!', sub='';
  if(pct>=90){ emoji='🏆'; title='Xuất sắc!'; sub='Tuyệt vời, bạn nắm vững kiến thức!'; }
  else if(pct>=70){ emoji='😊'; title='Tốt lắm!'; sub='Kết quả khả quan, tiếp tục cố gắng!'; }
  else if(pct>=50){ emoji='😐'; title='Cần ôn thêm!'; sub='Hãy xem lại phần chưa nắm vững.'; }
  else { emoji='😅'; title='Cần cố gắng hơn!'; sub='Đừng nản lòng, ôn tập thêm nhé!'; }
  
  document.getElementById('result-emoji').textContent=emoji;
  document.getElementById('result-title').textContent=title;
  document.getElementById('result-sub').textContent=sub || `Đúng ${correct}/${total} câu – ${pct}%`;
  
  retryData = { mode, numQ:questions.length };
  renderReview('all');
  showScreen('result-screen');
}

function renderReview(filter){
  const list=document.getElementById('review-list');
  list.innerHTML='';
  const letters=['A','B','C','D'];
  
  questions.forEach((q,i)=>{
    const res=results[i];
    const userAns=answers[i];
    if(filter==='wrong' && res!=='wrong') return;
    if(filter==='correct' && res!=='correct') return;
    if(filter==='skip' && res!==undefined) return;
    
    const div=document.createElement('div');
    div.className=`review-item ${res==='correct'?'correct-r':res==='wrong'?'wrong-r':'skip-r'}`;
    
    let ansHtml='';
    if(res===undefined){
      ansHtml=`<div class="review-skip">Chưa trả lời</div>`;
    } else {
      const userCls=res==='correct'?'review-user ok':'review-user';
      const icon=res==='correct'?'✓':'✗';
      ansHtml=`<div class="${userCls}">${icon} Bạn chọn: ${letters[userAns]}. ${q.opts[userAns]}</div>`;
      if(res==='wrong') ansHtml+=`<div class="review-correct">✓ Đáp án đúng: ${letters[q.ans]}. ${q.opts[q.ans]}</div>`;
    }
    
    div.innerHTML=`
      <div class="review-q"><span class="review-q-num">${i+1}.</span>${q.q}</div>
      <div class="review-ans">${ansHtml}</div>
    `;
    list.appendChild(div);
  });
  
  if(list.children.length===0){
    list.innerHTML='<div style="color:var(--text-muted);text-align:center;padding:2rem">Không có câu nào</div>';
  }
}

function filterReview(type, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderReview(type);
}

function retryQuiz(){
  // redo same questions
  answers={}; results={}; currentIdx=0;
  startTime=Date.now();
  questions=questions.sort(()=>Math.random()-0.5);
  showScreen('quiz-screen');
  buildNavGrid();
  renderQuestion();
  if(mode==='timed') startTimerBadge();
  if(mode==='exam') {
    let totalSec = questions.length * 48;
    startGlobalTimer(totalSec);
  }
}

// ===========================
// SCREEN MANAGER
// ===========================
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome(){
  window.location.href = 'index.html';
}

window.onload = function() {
  startQuiz();
};