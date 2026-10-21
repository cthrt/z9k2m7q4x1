(() => {
    const __fxInstall = () => {
        if (window.__fxBridgeInstalled) return true;
        if (typeof c === "undefined" || !c
            || typeof y === "undefined" || !y
            || typeof aa === "undefined" || !aa
            || typeof a0f === "undefined" || !a0f
            || typeof a0n === "undefined" || !a0n
            || typeof ss === "undefined" || !ss || !ss.a1M
            || typeof nl === "undefined" || !nl
            || typeof j1 === "undefined" || !j1
            || typeof ix === "undefined" || !ix
            || typeof jZ === "undefined" || !jZ || !jZ.fH || !jZ.lp
            || typeof bc === "undefined" || !bc || typeof bc.b8 !== "function"
            || typeof yB === "undefined" || !yB
            || typeof pz === "undefined" || !pz
            || typeof gW === "undefined" || !gW) return false;
        const __fx = window.__fx;
        if (!__fx || !__fx.autoOpening) return false;

        const o = {
    get bI() { return c.c2 },
    get cF() { return c.aI },
    get co() { return c.t },
    get kg() { return c.aH },
    get ke() { return c.bl },
    get fW() { return c.d },
    get fS() { return c.aP },
    get db() { return c.ao },
    get x1() { return c.bk },
    get fT() { return c.bJ }
};
const eF = {
    get aOq() { return y.xT },
    get fQ() { return y.aO },
    get fa() { return y.ax },
    get hu() { return y.an },
    get eG() { return y.oE },
    get eJ() { return y.oG },
    get eH() { return y.oF },
    get eK() { return y.oH }
};
const w = { cO: { iT: (...args) => aa.bY.a1D(...args), iV: (...args) => aa.bY.bZ(...args), jD: (...args) => aa.bY.aTe(...args) } };
const jG = { jH: (...args) => a0f.a1W(...args), aQO: (...args) => a0f.a1T(...args), aQP: (...args) => a0f.a1X(...args) };
const lF = { cY: (...args) => a0n.q5(...args), cL: (...args) => a0n.pv(...args), ca: (...args) => a0n.q7(...args) };
const pH = { a2J: { a7g: (...args) => ss.a1M.xn(...args), a7e: (...args) => ss.a1M.xr(...args), aKX: (...args) => ss.a1M.xm(...args) } };
const kX = { a7h: (...args) => nl.a1R(...args) };
const ee = {
    get iH() { return j1.a1g },
    mR: (...args) => j1.a5q(...args),
    lb: (...args) => j1.zb(...args),
    mQ: (...args) => j1.aT3(...args),
    lZ: (...args) => j1.zY(...args),
    la: (...args) => j1.zZ(...args),
    wd: (...args) => j1.g7(...args),
    we: (...args) => j1.g8(...args),
    lV: (...args) => j1.uZ(...args),
    mU: (...args) => j1.aT4(...args),
    sV: (...args) => j1.aAW(...args)
};
const eN = { ed: (...args) => ix.oR(...args), aCm: (...args) => ix.a3f(...args) };
const f2 = { aw: { a5e: (...args) => jZ.fH.lZ(...args), get p4() { return jZ.fH.qt }, aA7: (...args) => jZ.fH.a8K(...args) } };
const dY = { get p5() { return bc.yR == null ? null : { get ww() { return bc.yR.sS } } }, hw: (...args) => bc.ql(...args) };
const ar = yB, cQ = { get cl() { return pz.qH } }, p = { get eP() { return gW.gX }, get eQ() { return gW.gY }, get eR() { return gW.kY } };

        const __fxOriginalAttack=ss.a1M.xn;ss.a1M.xn=function(amount,target,...args){const player=o.co,balance=Math.max(0,Math.floor(Number(eF.fa[player])||0)),result=__fxOriginalAttack.call(this,amount,target,...args);__fx.autoOpening.onAttackApplied?.({local:true,neutral:Number(target)===o.bI,attackerId:player,targetId:Number(target),amount:Number(amount),troops:Math.floor(balance*(Number(amount)+1)/1024),tick:(Number.isFinite(__fx.currentGameTick)?__fx.currentGameTick:0)+1});return result};
const __fxHasBorderState=player=>Number.isInteger(player)&&player>=0&&player<o.bI&&eF.aOq!=null&&eF.aOq[player]!=null;
const __fxHasLivePlayer=player=>__fxHasBorderState(player)&&w.cO.iV(player)&&eF.fQ[player]>0;
const __fxSharesAutoMicroBorder=(player,id)=>{if(!__fxHasBorderState(player)||!__fxHasBorderState(id))return false;const playerBorder=eF.aOq[player],targetBorder=eF.aOq[id],scanTarget=targetBorder.length<playerBorder.length,border=scanTarget?targetBorder:playerBorder,owner=scanTarget?player:id,offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side];if(ee.mR(owner,pixel))return true}return false};
const __fxIsAutoMicroTarget=(player,id)=>__fxHasBorderState(player)&&__fxHasBorderState(id)&&id>=o.cF&&eF.fQ[id]>0&&jG.jH(player,id)&&__fxSharesAutoMicroBorder(player,id);
const __fxBuildAutoMicroTarget=(player,id)=>{if(!__fxIsAutoMicroTarget(player,id))return null;const land=eF.fQ[id],balance=Math.max(0,eF.fa[id]),density=balance/land;if(!Number.isFinite(density))return null;return{playerId:id,land:land,balance:balance,density:density,baseKillCost:2*(land+balance),active:lF.cY(player,id)}};
const __fxGetBorderingAutoMicroBots=player=>{const result=new Set,border=__fxHasBorderState(player)?eF.aOq[player]:[],offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side],id=ee.lZ(pixel)?ee.la(pixel):-1;if(id>=o.cF&&id<o.bI&&eF.fQ[id]>0)result.add(id)}return result};
const __fxGetAutoMicroData=(excluded=[])=>{const player=o.co,skipped=new Set(excluded),targets=[],targetStates=[];let aliveBots=0;if(!__fxHasLivePlayer(player))return{targets:targets,targetStates:targetStates,aliveBots:aliveBots};for(let id=o.cF;id<o.bI;id++)eF.fQ[id]>0&&aliveBots++;for(const id of __fxGetBorderingAutoMicroBots(player)){const target=__fxBuildAutoMicroTarget(player,id);if(!target)continue;targetStates.push(target);if(!target.active&&!skipped.has(id))targets.push(target)}return{targets:targets,targetStates:targetStates,aliveBots:aliveBots}};
__fx.autoOpening.attack=()=>{const player=o.co,active=lF.cY(player,o.bI),available=jG.aQO(player);return __fxHasLivePlayer(player)&&(active||available)?(pH.a2J.a7g(kX.a7h(),o.bI),true):false};
__fx.autoOpening.attackFreeLand=amount=>{const player=o.co;if(!__fxHasLivePlayer(player))return false;const active=lF.cY(player,o.bI),available=jG.aQO(player),encodedAmount=Number.isFinite(amount)?Math.min(1023,Math.max(0,Math.floor(amount))):kX.a7h();return active||available?(pH.a2J.a7g(encodedAmount,o.bI),true):false};
__fx.autoOpening.getFreeLandExpansionState=()=>{const player=o.co,playerAlive=__fxHasLivePlayer(player);if(!playerAlive)return{playerAlive:false,active:false,hasFreeLand:false,troops:0,balance:0};const active=lF.cY(player,o.bI);return{playerAlive:true,active:active,hasFreeLand:jG.aQO(player),troops:active?lF.cL(player,o.bI):0,balance:eF.fa[player]}};
__fx.autoOpening.getAutoMicroState=(excluded=[])=>{const player=o.co,data=__fxGetAutoMicroData(excluded);return{playerAlive:__fxHasLivePlayer(player),targets:data.targets,targetStates:data.targetStates,ownBalance:__fxHasLivePlayer(player)?eF.fa[player]:0,ownActiveAttacks:__fxHasLivePlayer(player)?lF.ca(player):0,aliveBots:data.aliveBots}};
__fx.autoOpening.getEconomyStats=()=>{const player=o.co,land=__fxHasLivePlayer(player)?eF.fQ[player]:0,overallExpenses=cQ.cl[12]+cQ.cl[13]+cQ.cl[15]+cQ.cl[16];return{land:land,overallExpenses:overallExpenses,efficiencyScore:land>0?overallExpenses/land:null}};
__fx.autoOpening.attackAutoMicroTarget=(targetId,amount)=>{const player=o.co,id=Number(targetId),controls=w.cO,encodedAmount=Math.min(1023,Math.max(0,Math.floor(Number(amount))));if(o.ke||!Number.isFinite(encodedAmount)||!controls.iT(1)||!controls.iV(player)||!__fxIsAutoMicroTarget(player,id)||lF.cY(player,id))return null;pH.a2J.a7g(encodedAmount,id);return{playerId:id,amount:encodedAmount}};
__fx.autoOpening.cancelFreeLandAttack=()=>{const player=o.co;return __fxHasLivePlayer(player)&&lF.cY(player,o.bI)?(pH.a2J.a7e(o.bI),true):false};
const __fxMessiahOutsideBorder=author=>{const result=[],seen=new Set(),border=__fxHasBorderState(author)?eF.aOq[author]:[],offsets=ee.iH;for(let index=0;index<border.length;index++)for(let side=3;side>=0;side--){const pixel=border[index]+offsets[side];if(!ee.mR(author,pixel)&&!seen.has(pixel)){seen.add(pixel);result.push(pixel)}}return result};
const __fxMessiahBorderRatio=(author,target)=>{const border=__fxMessiahOutsideBorder(author);if(border.length===0)return 0;let matching=0;for(let index=0;index<border.length;index++)matching+=target===o.bI?ee.lb(border[index])?1:0:ee.mR(target,border[index])?1:0;return matching/border.length};
const __fxMessiahEntityPixels=id=>{const result=[];if(!__fxHasBorderState(id)||eF.fQ[id]<=0)return result;for(let y=eF.eJ[id];y<=eF.eK[id];y++)for(let x=eF.eG[id];x<=eF.eH[id];x++){const pixel=ee.mQ(x,y);ee.mR(id,pixel)&&result.push(pixel)}return result};
const __fxMessiahEncodedRatio=ratio=>{const balance=eF.fa[o.co],desired=Math.floor(balance*Math.min(1000,Math.max(0,Math.floor(Number(ratio))))/1000);if(balance<=0||desired<=0)return null;let encoded=Math.min(1023,Math.max(0,Math.floor(desired*1024/balance)));while(encoded>0&&Math.floor(balance*(encoded+1)/1024)>desired)encoded--;while(encoded<1023&&Math.floor(balance*(encoded+2)/1024)<=desired)encoded++;return encoded};
const __fxMessiahTroopsForEncoded=(balance,encoded)=>Math.floor(balance*(encoded+1)/1024);
const __fxMessiahExactPlan=(initialBalance,requested)=>{const balance=Math.max(0,Math.floor(Number(initialBalance))),desired=Math.max(0,Math.floor(Number(requested)));if(balance<=0||desired<=0)return null;const exactEncoded=(available,amount)=>{if(available<=0||amount<=0)return null;const encoded=Math.ceil(amount*1024/available)-1;return encoded>=0&&encoded<=1023&&__fxMessiahTroopsForEncoded(available,encoded)===amount?encoded:null};const direct=exactEncoded(balance,desired);if(direct!==null)return{encoded:[direct],troops:desired};const penalty=Math.floor(balance*12/1024);for(let first=0;first<1024;first++){const firstTroops=__fxMessiahTroopsForEncoded(balance,first);if(firstTroops<=0||firstTroops>=desired)continue;const nextBalance=balance-firstTroops-penalty,second=exactEncoded(nextBalance,desired-firstTroops);if(second!==null)return{encoded:[first,second],troops:desired}}return null};
__fx.autoOpening.messiah={getState:()=>{const player=o.co;return{playerAlive:__fxHasLivePlayer(player),playerId:player,playerCount:o.cF,maxEntities:o.bI,singleplayer:o.kg,customLobby:__fx.customLobby?.isActive?.()===true,gameMode:o.fW,width:p.eP,height:p.eQ,land:eF.fQ,balance:eF.fa,offsets:Array.from(ee.iH),getInterestRate:id=>{const normal=Math.max(.01,.07-Math.floor(dY.hw()/10)*.0003125),minimum=(1+Math.sqrt(2.56*Math.max(0,eF.fQ[id])/Math.max(1,o.fS)))/100;return 1+Math.max(normal,minimum)}}},getBorderPixels:id=>__fxHasBorderState(id)?Array.from(eF.aOq[id]):[],getEntityPixels:__fxMessiahEntityPixels,getOwner:pixel=>ee.lZ(pixel)?ee.la(pixel):-1,strongIsOwner:(id,pixel)=>ee.mR(id,pixel),getX:pixel=>ee.wd(pixel),getY:pixel=>ee.we(pixel),getDensity:id=>eF.fQ[id]>0?eF.fa[id]/eF.fQ[id]:Infinity,getBorderRatio:__fxMessiahBorderRatio,getBotTiming:id=>{const timing=Number(ar.fxBotTiming&&ar.fxBotTiming[id]);return Number.isFinite(timing)?timing:Infinity},isAttacking:(author,target)=>__fxHasBorderState(author)&&lF.cY(author,target),getRemainingTroops:(author,target)=>__fxHasBorderState(author)&&lF.cY(author,target)?lF.cL(author,target):0,canAttackFreeLand:id=>__fxMessiahOutsideBorder(id).some(pixel=>ee.lb(pixel))||lF.cY(id,o.bI),attackRatio:(targetId,ratio)=>{const player=o.co,id=Number(targetId),encoded=__fxMessiahEncodedRatio(ratio);if(encoded===null||o.ke||!w.cO.iT(1)||!w.cO.iV(player)||id<0||id>o.bI||id!==o.bI&&!jG.jH(player,id)||lF.cY(player,id))return false;pH.a2J.a7g(encoded,id);return true},attackExactTroops:(targetId,troops)=>{const player=o.co,id=Number(targetId),requested=Math.max(0,Math.floor(Number(troops))),plan=__fxMessiahExactPlan(eF.fa[player],requested);if(o.ke||!w.cO.iT(1)||!w.cO.iV(player)||id<0||id>=o.bI||!jG.jH(player,id))return{sent:false,reason:"unavailable",requested:requested};if(plan===null)return{sent:false,reason:"unrepresentable",requested:requested};for(const encoded of plan.encoded)pH.a2J.a7g(encoded,id);return{sent:true,requested:requested,troops:plan.troops,actions:plan.encoded.length,encoded:plan.encoded}},cancel:targetId=>{const player=o.co,id=Number(targetId);return __fxHasLivePlayer(player)&&lF.cY(player,id)?(pH.a2J.a7e(id),true):false}};
const __fxGetAutoSpawnStatus=()=>{const player=o.co,connected=o.kg||f2.aw.a5e(f2.aw.p4),selectableSpawn=Boolean(o.db&&w.cO.iT(0)),ready=connected&&selectableSpawn&&!o.ke&&Number.isInteger(player)&&player>=0&&player<o.bI&&eF.hu[player]!==0;if(!ready)return{ready:false,singleplayer:o.kg,connected:connected,selectableSpawn:selectableSpawn};const selectionStep=Number.isInteger(dY.p5&&dY.p5.ww)?dY.p5.ww:null,selectionMax=Number.isInteger(o.x1)?o.x1:null,currentSpawn=eF.fQ[player]>0?{x:(eF.eG[player]+eF.eH[player])>>1,y:(eF.eJ[player]+eF.eK[player])>>1}:null;return{ready:true,singleplayer:o.kg,connected:connected,selectableSpawn:selectableSpawn,gameMode:o.fW,mapId:p.eR,isOneVsOne:o.fW===8,currentSpawn:currentSpawn,selectionStep:selectionStep,selectionMax:selectionMax,selectionRemaining:selectionStep===null||selectionMax===null?null:Math.max(0,selectionMax-selectionStep)}};__fx.autoSpawn={getStatus:__fxGetAutoSpawnStatus,getState:()=>{const status=__fxGetAutoSpawnStatus();if(!status.ready)return status;const player=o.co,width=p.eP,height=p.eQ,freeLand=new Uint8Array(width*height),ownableLand=new Uint8Array(width*height),spawns=[];for(let y=0;y<height;y++)for(let x=0;x<width;x++){const pixel=ee.mQ(x,y),ownable=ee.lV(pixel);ownableLand[y*width+x]=ownable?1:0;freeLand[y*width+x]=ownable&&(!ee.mU(pixel)||ee.sV(player,pixel))?1:0}for(let id=0;id<o.bI;id++)if(id!==player&&eF.fQ[id]>0)spawns.push({id:id,x:(eF.eG[id]+eF.eH[id])>>1,y:(eF.eJ[id]+eF.eK[id])>>1,land:eF.fQ[id],human:id<o.cF,bot:id>=o.cF});return{...status,width:width,height:height,freeLand:freeLand,ownableLand:ownableLand,spawns:spawns,humanCount:o.cF,playerCount:o.cF,entityCount:o.bI}},spawn:(x,y)=>{const player=o.co,px=Math.round(Number(x)),py=Math.round(Number(y));if(!o.db||o.ke||(!o.kg&&!f2.aw.a5e(f2.aw.p4))||!Number.isInteger(px)||!Number.isInteger(py)||px<0||py<0||px>=p.eP||py>=p.eQ||!w.cO.iT(0)||!w.cO.iV(player))return false;const pixel=ee.mQ(px,py);if(!ee.lV(pixel)||ee.mU(pixel))return false;const cell=eN.ed(px,py);return eN.aCm(cell)?(o.kg||f2.aw.aA7(f2.aw.p4),pH.a2J.aKX(cell),true):false}};
const __fxDecodedAutoSpawnState=__fx.autoSpawn.getState;__fx.autoSpawn.getState=()=>{const state=__fxDecodedAutoSpawnState();if(!state?.ready)return state;for(const spawn of state.spawns){spawn.human=spawn.id<o.cF;spawn.bot=spawn.id>=o.cF}state.humanCount=o.cF;state.playerCount=o.cF;state.entityCount=o.bI;return state};

        const __fxOriginalTick = bc.b8;
        bc.b8 = function () {
            const result = __fxOriginalTick.apply(this, arguments);
            const tick = bc.ql();
            __fx.currentGameTick = tick;
            try {
                __fx.autoOpening?.onTick?.(tick);
            } catch (error) {
                console.error("[retardoclient] onTick failed", error);
            }
            return result;
        };

        if (jZ.lp && typeof jZ.lp.lq === "function") {
            const __fxOriginalDecode = jZ.lp.lq;
            jZ.lp.lq = function (...args) {
                const result = __fxOriginalDecode.apply(this, args);
                try {
                    __fx.autoSpawnController?.onDecodedPacket?.(this, args[1]);
                } catch (error) {
                    console.error("[retardoclient] onDecodedPacket failed", error);
                }
                return result;
            };
        }

        window.__fxBridgeInstalled = true;
        console.log("[retardoclient] game bridge installed");
        return true;
    };

    const __fxOriginalAiCommand = window.aiCommand746;
    if (typeof __fxOriginalAiCommand === "function") {
        window.aiCommand746 = function (...args) {
            const result = __fxOriginalAiCommand.apply(this, args);
            setTimeout(__fxInstall, 0);
            return result;
        };
    }

    window.addEventListener("load", () => setTimeout(__fxInstall, 0));
    const __fxBridgeTimer = setInterval(() => {
        if (__fxInstall()) clearInterval(__fxBridgeTimer);
    }, 200);
    setTimeout(() => clearInterval(__fxBridgeTimer), 30000);
})();
