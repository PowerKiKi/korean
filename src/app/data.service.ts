import {inject, Injectable} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

export interface Group {
    title: string;
    rules: Rule[];
}

export interface Rule {
    title: string;
    tags: string[];
    content: string | SafeHtml;
}

@Injectable({providedIn: 'root'})
export class DataService {
    public readonly data: Group[];
    readonly #sanitizer = inject(DomSanitizer);

    constructor() {
        this.data = [
            {
                title: `Basics`,
                rules: [
                    {
                        title: `요`,
                        tags: [`Ewha 1-2`],
                        content: this.#sanitizer
                            .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" height="140" width="200">
                        <text x="0" y="72">받침</text>
                        <text x="12" y="50">no</text>
                        <text x="7" y="95">yes</text>
                        <text x="47" y="21">others</text>
                        <text x="47" y="57">ㅡ⇨X*</text>
                        <text x="47" y="91">ㄷ⇨ㄹ</text>
                        <text x="47" y="104">ㅂ⇨우</text>
                        <text x="47" y="125">others</text>
                        <text x="113" y="16">ㅗ</text>
                        <text x="113" y="31">ㅜ</text>
                        <text x="113" y="47">ㅣ</text>
                        <text x="110" y="64">others</text>
                        <text x="104" y="85">ㅏㅑㅗㅛ</text>
                        <text x="102" y="125">ㅓㅕㅜㅠㅡl</text>
                        <text class="topic" x="162" y="15">ㅘ요</text>
                        <text class="topic" x="162" y="35">ㅝ요</text>
                        <text class="topic" x="162" y="55">ㅕ요</text>
                        <text class="topic" x="173" y="75">요</text>
                        <text class="topic" x="162" y="95">아요</text>
                        <text class="topic" x="162" y="115">어요</text>

                        <path d="m22,70l8,-30" fill="none" stroke="#000"></path>
                        <path d="m22,70l8,30" fill="none" stroke="#000"></path>

                        <path d="m30,40s35,-35 70,0" fill="none" stroke="#000"></path>
                        <path d="m30,40s6,11 15,13" fill="none" stroke="#000"></path>
                        <path d="m85,53s14,6 15,46" fill="none" stroke="#000"></path>

                        <path d="m100,40s1,-28 60,-28" fill="none" stroke="#000"></path>
                        <path d="m100,40s1,-8 60,-8" fill="none" stroke="#000"></path>
                        <path d="m100,40s1,12 60,12" fill="none" stroke="#000"></path>
                        <path d="m100,40s1,36 60,32" fill="none" stroke="#000"></path>

                        <path d="m30,100s6,-11 15,-13" fill="none" stroke="#000"></path>
                        <path d="m30,100l0,0 15,0" fill="none" stroke="#000"></path>
                        <path d="m85,100l0,0 15,0" fill="none" stroke="#000"></path>
                        <path d="m30,100s35,35 70,0" fill="none" stroke="#000"></path>

                        <path d="m100,100s-7,-11 -18,-13" fill="none" stroke="#000"></path>
                        <path d="m100,100s16,-12 60,-11" fill="none" stroke="#000"></path>
                        <path d="m100,100s17,12 60,11" fill="none" stroke="#000"></path>
                        </svg>
                        <p class="exception">하다 ⇨ 해요</p>
                        <p class="exception">vowel + 이다 ⇨ -예요</p>
                        <p class="exception">consonant + 이다 ⇨ -이에요</p>
                        <p class="exception">* delete and use previous vowel (or ㅓ if none) to decide</p>
                        <p class="exception">see also exceptions of <a href="#exceptionRule1">exception rule 1</a></p>`),
                    },
                    {
                        title: `Negative`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">안</p>
                        <p class="example">사과를 <span class="topic">안</span> 먹어요.</p>

                        <p class="topic">-지 않다</p>
                        <p class="example">사과를 먹<span class="topic">지 않아요.</span></p>`,
                    },
                    {
                        title: `Future`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)ㄹ 거예요</p>
                        <p class="example">사과를 먹<span class="topic">을 거예요.</span></p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Doing`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-고 있다</p>
                        <p class="example">사과를 먹<span class="topic">고 있어요.</span></p>`,
                    },
                ],
            },
            {
                title: `Want / Plan to`,
                rules: [
                    {
                        title: `Want to`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-고 싶다</p>
                        <p class="example">사과를 먹<span class="topic">고 싶어요</span>.</p>`,
                    },
                    {
                        title: `Intent to`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)려고 하다</p>
                        <p class="example">사과를 먹<span class="topic">으려고 해요</span>.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Promise to`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)ㄹ게요</p>
                        <p class="example">사과를 먹<span class="topic">을게요</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Let's do?`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-(으)ㄹ 까요</p>
                        <p class="example">사과를 먹<span class="topic">을 까요</span>?</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Let's do!`,
                        tags: [`Ewha 1-2`, `Active Korean 4`],
                        content: `<p class="topic">V-(으)ㅂ시다</p>
                        <p class="example">사과를 먹<span class="topic">읍시다</span>!</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Let's not do!`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-지 맙시다</p>
                        <p class="example">사과를 먹<span class="topic">지 맙시다</span>!</p>`,
                    },
                    {
                        title: `Can help by doing X ?`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-아/어 드릴까요 <span class="comment">formal</span></p>
                        <p class="example">짐을 들<span class="topic">어 드릴까요</span>?</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>`,
                    },
                    {
                        title: `Will help by doing X`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-아/어 드릴게요 <span class="comment">formal</span></p>
                        <p class="example">짐을 들<span class="topic">어 드릴게요</span>.</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>`,
                    },
                    {
                        title: `Will ?`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-(으)시겠습니까 <span class="comment">formal</span></p>
                        <p class="example">사과를 드<span class="topic">시겠습니까</span>?</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Promise to`,
                        tags: [`Ewha 2-1`, `Active Korean 4`],
                        content: `<p class="topic">V-기로 하다</p>
                        <p class="example">내일 친구를 만나<span class="topic">기로 했어요</span>.</p>`,
                    },
                    {
                        title: `Will you ? / I will`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-(으)ㄹ래요</p>
                        <p class="example">사과를 먹<span class="topic">을래요</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>
                        <p class="comment">can use with 안 / 못</p>`,
                    },
                    {
                        title: `I definitely will`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-겠-</p>
                        <p class="example">사과를 먹<span class="topic">겠습니다</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `If want X do Y`,
                        tags: [`Ewha 2-1`, `Active Korean 4`],
                        content: `<p class="topic">V-(으)려면</p>
                        <p class="example">사과를 먹<span class="topic">으려면</span> 사야 해요.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                ],
            },
            {
                title: `Description`,
                rules: [
                    {
                        title: `Adjective`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">A-(으)ㄴ + N</p>
                            <p class="example"><span class="topic">비싼</span> 사과예요.</p>
                            <p class="exception">있다 ⇨ 있는</p>
                            <p class="exception">없다 ⇨ 없는</p>
                            <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `The thing being`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-는 + N</p>
                            <p class="example">먹<span class="topic">는</span> 사과가 맛있어요.</p>
                            <p class="exception">ㄹ ⇨ delete</p>`,
                    },
                    {
                        title: `The thing that has been`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-(으)ㄴ + N</p>
                            <p class="example">먹<span class="topic">은</span> 사과가 맛있었어요.</p>
                            <p class="exception">ㄷ ⇨ ㄹ</p>
                            <p class="exception">ㄹ ⇨ delete</p>`,
                    },
                    {
                        title: `The thing that will be`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-(으)ㄹ + N</p>
                            <p class="example">먹<span class="topic">을</span> 사과가 맛있겠어요.</p>
                            <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `To be called`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-(이)라고 하다</p>
                        <p class="example">저는 마이클<span class="topic">이라고 해요</span>.</p>`,
                    },
                    {
                        title: `Doing`,
                        tags: [`Ewha 2-1`, `Active Korean 4`],
                        content: `<p class="topic">N 중 이다/에</p>
                        <p class="example">공사 <span class="topic"> 중이에요</span>.</p>

                        <p class="topic">V-는 중 이다/에</p>
                        <p class="example">사과를 먹<span class="topic">는 중이에요</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Oh! It's X`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-(이)군요</p>
                        <p class="example">사과가 달<span class="topic">군요</span>.</p>

                        <p class="topic">A-군요</p>
                        <p class="example">사과가 달<span class="topic">군요</span>.</p>

                        <p class="topic">V-는군요</p>
                        <p class="example">눈이 오<span class="topic">는군요</span>.</p>
                        <p class="exception">ㄹ ⇨ delete</p>
                        <p class="exception">있다 ⇨ 있군요</p>
                        <p class="exception">없다 ⇨ 없군요</p>`,
                    },
                ],
            },
            {
                title: `From, To`,
                rules: [
                    {
                        title: `Person`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-에게서 or -한테서</p>
                            <p class="example">친구<span class="topic">에게서</span> 편지를 받아요.</p>

                            <p class="topic">-에게 or -한테</p>
                            <p class="example">친구<span class="topic">에게</span> 전화해요.</p>`,
                    },
                    {
                        title: `Place`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-에서</p>
                            <p class="example">집<span class="topic">에서</span> 와요.</p>

                            <p class="topic">-까지</p>
                            <p class="example">학교<span class="topic">까지</span> 가요.</p>`,
                    },
                    {
                        title: `Time`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-부터</p>
                            <p class="example">아침<span class="topic">부터</span> 비가 와요.</p>

                            <p class="topic">-까지</p>
                            <p class="example">저녁<span class="topic">까지</span> 비가 와요.</p>`,
                    },
                ],
            },
            {
                title: `Purpose`,
                rules: [
                    {
                        title: `Do X to do Y`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-(으)려고</p>
                            <p class="example">먹<span class="topic">으려고</span> 사과를 사요.</p>

                            <p class="exception">cannot use with 하세요/합시다</p>
                            <p class="exception">subject cannot change</p>`,
                    },
                    {
                        title: `Do X to do Y`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-기 위해(서)</p>
                            <p class="example">먹<span class="topic">기 위해서</span> 사과를 사요.</p>`,
                    },
                    {
                        title: `Purpose`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">A/V-도록</p>
                            <p class="example">친구가 먹<span class="topic">도록</span> 사과를 사요.</p>
                            <p class="comment">to give directions or make requests</p>`,
                    },
                ],
            },
            {
                title: `Explanations`,
                rules: [
                    {
                        title: `Guess it is`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-겠-</p>
                            <p class="example">재미있<span class="topic">겠</span>어요.</p>
                            <p class="example">재미있었<span class="topic">겠</span>어요.</p>`,
                    },
                    {
                        title: `X is more than Y`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">Y-보다</p>
                            <p class="example">사과를 바나나<span class="topic">보다</span> 좋아해요.</p>`,
                    },
                    {
                        title: `Go to X to do Y`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">Y-(으)러 가다/오다/다니다</p>
                            <p class="example">사과를 먹<span class="topic">으러</span> 집에 <span class="topic">가요</span>.</p>
                            <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Do X because Y`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">Y-아서/-어서</p>
                            <p class="example">배고<span class="topic">파서</span> 사과를 먹어요.</p>
                            <p class="exception">Y is always present</p>
                            <p class="exception">하다 ⇨ 해서</p>
                            <p class="exception">vowel + 이다 ⇨ -여서 or -라서</p>
                            <p class="exception">consonant + 이다 ⇨ -이어서 or -이라서</p>`,
                    },
                    {
                        title: `Not X but Y`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-이/가 아니라</p>
                        <p class="example">사과<span class="topic">가 아니라</span> 바나나예요.</p>

                        <p class="topic">A-(으)ㄴ 게 아니라</p>
                        <p class="example">많<span class="topic">은 게 아니라</span> 적어요.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>

                        <p class="topic">V-(으)ㄴ 게 아니라 <span class="comment">past</span></p>
                        <p class="example">먹<span class="topic">은 게 아니라</span> 마신 거예요.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>

                        <p class="topic">V-는 게 아니라 <span class="comment">present</span></p>
                        <p class="example">먹<span class="topic">는 게 아니라</span> 마시는 거예요.</p>
                        <p class="exception">ㄹ ⇨ delete</p>

                        <p class="topic">V-(으)ㄹ 게 아니라 <span class="comment">future</span></p>
                        <p class="example">먹<span class="topic">을 게 아니라</span> 마실 거예요.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Given X it's Y`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-에 비해(서)</p>
                        <p class="example">크기<span class="topic">에 비해서</span> 사과가 싸요.</p>
                        <p class="comment">Can be used like 보다 too. But 보다 can only be used to compare same characteristics (size1 VS size2, or quality1 VS quality2) but never for different characteristics (size1 VS price2, or quality1 VS quantity2)</p>`,
                    },
                    {
                        title: `Because`,
                        tags: [`Ewha 2-1`, `Active Korean 4`],
                        content: `<p class="topic">N 때문에</p>
                        <p class="example">시험 <span class="topic">때문에</span> 공부해요.</p>

                        <p class="topic">A/V-기 때문에</p>
                        <p class="example">사과가 맛있<span class="topic">기 때문에</span> 먹어요.</p>
                        <p class="exception">cannot use with 하세요/합시다</p>
                        <p class="comment">usually used for writing</p>`,
                    },
                    {
                        title: `Because`,
                        tags: [`Ewha 2-1`, `Active Korean 4`],
                        content: `<p class="topic">A/V-거든요</p>
                        <p class="example">사과를 먹어요. 배고프<span class="topic">거든요</span>.</p>`,
                    },
                    {
                        title: `Because`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">A/V-(으)니까</p>
                        <p class="example">배고프<span class="topic">니까</span> 사과를 먹어요.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                ],
            },
            {
                title: `Imperatives`,
                rules: [
                    {
                        title: `Please / Do smth for smb`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-아/어 주다</p>
                        <p class="example">사과를 사<span class="topic"> 주세요</span>.</p>
                        <p class="example">사과를 찾<span class="topic">아 주세요</span>.</p>
                        <p class="example">여자<span class="topic">를 위해서</span> 사과를 사<span class="topic"> 주세요</span>.</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>`,
                    },
                    {
                        title: `Have to`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-아야/-어야 하다</p>
                        <p class="example">사과를 사서 돈이 있<span class="topic">어야 해요</span>.</p>
                        <p class="exception">하다 ⇨ 해야</p>
                        <p class="exception">vowel + 이다 ⇨ -여야</p>
                        <p class="exception">consonant + 이다 ⇨ -이어야</p>`,
                    },
                    {
                        title: `Do`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">V-(으)세요</p>
                        <p class="example">사과를 사<span class="topic">세요</span>.</p>`,
                    },
                    {
                        title: `Don't`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-지 마세요</p>
                        <p class="example">사과를 사<span class="topic">지 마세요</span>.</p>`,
                    },
                    {
                        title: `Do (polite)`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)십시오</p>
                        <p class="example">사과를 사<span class="topic">십시오</span>.</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>`,
                    },
                    {
                        title: `Don't (polite)`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-지 마십시오</p>
                        <p class="example">사과를 사<span class="topic">지 마십시오</span>.</p>
                        <p class="exception"><a href="#exceptionRule4">exception polite verbs</a></p>`,
                    },
                    {
                        title: `Have to`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-아/어야 하다/되다</p>
                        <p class="example">배고파서 먹<span class="topic">어야 해요</span>.</p>
                        <p class="exception">하다 ⇨ 해야 해요</p>
                        <p class="exception">vowel + 이다 ⇨ -여야 해요</p>
                        <p class="exception">consonant + 이다 ⇨ -이어야 해요</p>`,
                    },
                ],
            },
            {
                title: `Miscellaneous`,
                rules: [
                    {
                        title: `If`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)면</p>
                        <p class="example">사과가 있<span class="topic">으면</span> 먹어요.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Or`,
                        tags: [`Ewha 1-2`, `Active Korean 4`],
                        content: `<p class="topic">N-(이)나</p>
                        <p class="example">사과<span class="topic">나</span> 바나나를 먹어요.</p>

                        <p class="topic">A/V-거나</p>
                        <p class="example">사과를 주<span class="topic">거나</span> 먹어요.</p>`,
                    },
                    {
                        title: `And / With`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">N-하고</p>
                        <p class="example">사과<span class="topic">하고</span> 바나나를 먹어요.</p>`,
                    },
                    {
                        title: `By / In (means)`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)로</p>
                        <p class="example">버스<span class="topic">로</span> 가요.</p>
                        <p class="example">한국어<span class="topic">로</span> 말해요.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Via`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)로 해서</p>
                        <p class="example">서울에서 도쿄<span class="topic">로 해서</span> 파리까지 가요.</p>`,
                    },
                    {
                        title: `Isn't it?`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-지요? <span class="comment">pronouced "죠"</span></p>
                        <p class="example">사과를 먹었<span class="topic">지요?</span></p>
                        <p class="example">사과를 먹<span class="topic">지요?</span></p>
                        <p class="example">사과를 먹을 거<span class="topic">지요?</span></p>
                        <p class="exception">vowel + 이다 ⇨ -지요?</p>
                        <p class="exception">consonant + 이다 ⇨ -이지요?</p>`,
                    },
                    {
                        title: `About`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-에 대해(서) + V</p>
                        <p class="example">사과<span class="topic">에 대해서</span> 말해요.</p>

                        <p class="topic">N-에 대한 + N</p>
                        <p class="example">사과<span class="topic">에 대한</span> 글이에요.</p>
                        <p class="comment">eg: 글, 기사, 책, 소문, 이야기</p>`,
                    },
                    {
                        title: `But`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">A/V-지만</p>
                        <p class="example">사과가 비싸<span class="topic">지만</span> 맛있어요.</p>`,
                    },
                    {
                        title: `Just`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-(이)나</p>
                        <p class="example">사과<span class="topic">나</span> 먹어요.</p>`,
                    },
                    {
                        title: `Asking gently`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N-인가요</p>
                        <p class="example">학생<span class="topic">인가요</span>?</p>

                        <p class="topic">A-(으)ㄴ 가요</p>
                        <p class="example">비<span class="topic">싼 가요</span>?</p>

                        <p class="topic">V-나요</p>
                        <p class="example">먹<span class="topic">나요</span>?</p>
                        <p class="example">먹<span class="topic">을 건가요</span>?</p>`,
                    },
                    {
                        title: `Hope/Request`,
                        tags: [`Active Korean 4`],
                        content: `<p class="topic">V-기 바랍니다</p>
                        <p class="example">와 주시<span class="topic">기 바랍니다</span>.</p>`,
                    },
                    {
                        title: `And (with connections)`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-아/어서</p>
                        <p class="example">가게에 가<span class="topic">서</span> 사과 샀어요.</p>
                        <p class="exception">cannot be used with 입다, 쓰다, 신다, 들다, 타다</p>`,
                    },
                ],
            },
            {
                title: `Ability`,
                rules: [
                    {
                        title: `Can`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)ㄹ 수 있다</p>
                        <p class="example">사과를 먹<span class="topic">을 수 있어요</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Can't`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)ㄹ 수 없다</p>
                        <p class="example">사과를 먹<span class="topic">을 수 없어요</span>.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>

                        <p class="topic">못</p>
                        <p class="example">사과를 <span class="topic">못</span> 먹어요.</p>`,
                    },
                    {
                        title: `Try to (present) / Have experienced (past)`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-아/어 보다</p>
                        <p class="example">사과를 먹<span class="topic">어 보세요</span>.</p>
                        <p class="example">한국에서 살<span class="topic">아 봤어요</span>.</p>
                        <p class="exception">하다 ⇨ 해 보다</p>`,
                    },
                    {
                        title: `Permission`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-아/어도 되다</p>
                        <p class="example">사과를 먹<span class="topic">어도 되요</span>.</p>
                        <p class="exception">하다 ⇨ 해도 되다</p>`,
                    },
                    {
                        title: `Interdiction`,
                        tags: [`Ewha 1-2`],
                        content: `<p class="topic">-(으)면 안 되다</p>
                        <p class="example">사과를 먹<span class="topic">으면 안 되요</span>.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Didn't know it is X`,
                        tags: [`Active Korean 4`],
                        content: `<p class="topic">A/V-(으)ㄹ 줄 몰랐다</p>
                        <p class="example">사과가 비<span class="topic">쌀 줄 몰랐어요</span>.</p>`,
                    },
                ],
            },
            {
                title: `Time related`,
                rules: [
                    {
                        title: `Before`,
                        tags: [`Ewha 1-2`, `Active Korean 4`],
                        content: `<p class="topic">-기 전에</p>
                            <p class="example">사과를 먹<span class="topic">기 전에</span> 샀어요.</p>`,
                    },
                    {
                        title: `After`,
                        tags: [`Ewha 1-2`, `Active Korean 4`],
                        content: `<p class="topic">-(으)ㄴ 후에</p>
                            <p class="example">사과를 <span class="topic">산 후에</span> 먹을 거예요.</p>
                            <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>

                            <p class="topic">-고 <span class="comment">short of 그리고</span></p>
                            <p class="example">사과를 사<span class="topic">고</span> 먹을 거예요.</p>`,
                    },
                    {
                        title: `Since X it's been Y`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-(으)ㄴ 지</p>
                        <p class="example">사과를 먹<span class="topic">은 지</span> 1년이 됐어요.</p>

                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>
                        <p class="comment">almost: 다 됐어요 / (다) 되어 가요</p>
                        <p class="comment">exact: 됐어요</p>
                        <p class="comment">over: 지났어요 / 넘었어요</p>`,
                    },
                    {
                        title: `When`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N 때</p>
                        <p class="example">학생 <span class="topic">때</span> 좋아요.</p>

                        <p class="topic">A/V-(으)ㄹ 때</p>
                        <p class="example">사과를 먹<span class="topic">을 때</span> 좋아요.</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `When it was`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">A/V-았/었을 때</p>
                        <p class="example">사과를 먹<span class="topic">었을 때</span> 좋았어요.</p>
                        <p class="exception">vowel + 이다 ⇨ -였을 때</p>
                        <p class="exception">consonant + 이다 ⇨ -이었을 때</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `Have you ever`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">V-(으)ㄴ 적이 있다/없다/많다/적다</p>
                        <p class="example">사과를 먹<span class="topic">은 적이 있어요</span>?</p>
                        <p class="exception"><a href="#exceptionRule2">exception rule 2</a></p>`,
                    },
                    {
                        title: `While`,
                        tags: [`Ewha 2-1`],
                        content: `<p class="topic">N 동안(에)</p>
                        <p class="example">휴가 <span class="topic">동안</span> 사과를 먹어요.</p>

                        <p class="topic">V-는 동안(에)</p>
                        <p class="example">영화를 보<span class="topic">는 동안</span> 사과를 먹어요.</p>
                        <p class="exception">ㄹ ⇨ delete</p>`,
                    },
                    {
                        title: `Should have done X`,
                        tags: [`Active Korean 4`],
                        content: `<p class="topic">V-았/었어야 됐는데</p>
                        <p class="example">사과를 먹<span class="topic">었어야 됐는데</span>...</p>`,
                    },
                ],
            },
            {
                title: `Reporting speech`,
                rules: [
                    {
                        title: `Affirmative`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">N-(이)라고 하다</p>
                        <p class="example">사과<span class="topic">라고 했어요</span>.</p>

                        <p class="topic">A-다고 하다</p>
                        <p class="example">사과가 달<span class="topic">다고 했어요</span>.</p>

                        <p class="topic">V-ㄴ/는다고 하다</p>
                        <p class="example">사과를 먹<span class="topic">는다고 했어요</span>.</p>

                        <p class="topic">P-았/었/였다고 하다 <span class="comment">past</span></p>
                        <p class="example">사과를 먹<span class="topic">었다고 했어요</span>.</p>`,
                    },
                    {
                        title: `Question ?`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">N/A/V-냐고 하다</p>
                        <p class="example">사과를 먹<span class="topic">냐고 했어요</span>.</p>
                        <p class="exception">ㄹ ⇨ delete</p>`,
                    },
                    {
                        title: `Imperative`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">V-(으)라고 하다</p>
                        <p class="example">사과를 먹<span class="topic">으라고 했어요</span>.</p>

                        <p class="comment">original: V-(으)세요</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>
                        <p class="exception">주다: if original speaker ask for himself, change: 저를 도와주세요 ⇨ 도와달라고 했어요</p>`,
                    },
                    {
                        title: `Let's do!`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">V-자고 하다</p>
                        <p class="example">사과를 먹<span class="topic">자고 했어요</span>.</p>

                        <p class="comment">original: V-(으)ㅂ시다</p>`,
                    },
                ],
            },
            {
                title: `Other stuff`,
                rules: [
                    {
                        title: `As you know`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">N/A/V-잖아요</p>
                        <p class="example">아내가 예쁘<span class="topic">잖아요</span>.</p>`,
                    },
                    {
                        title: `Because did X, bad Y happened`,
                        tags: [`Easy Korean 4`, `Active Korean 4`],
                        content: `<p class="topic">V-느라고</p>
                        <p class="example">영화를 보<span class="topic">느라고</span>  피자가 탔어요.</p>`,
                    },
                    {
                        title: `Not only X but also Y`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">N-뿐(만) 아니라</p>
                        <p class="example">사과<span class="topic">뿐만 아니라</span> 바나나도 좋아해요.</p>

                        <p class="topic">A-(으)ㄹ 뿐(만) 아니라</p>
                        <p class="example">사과가 맛있<span class="topic">을 뿐만 아니라</span> 싸요.</p>

                        <p class="topic">V-(으)ㄹ 뿐(만) 아니라</p>
                        <p class="example">아내가 노래<span class="topic">할 뿐만 아니라</span> 춤도 춰요.</p>
                        <p class="exception"><a href="#exceptionRule3">exception rule 3</a></p>`,
                    },
                    {
                        title: `Even though do X, Y happens`,
                        tags: [`Active Korean 4`],
                        content: `<p class="topic">아무리 V-아/어도</p>
                        <p class="example"><span class="topic">아무리</span> 먹어<span class="topic">도</span> 배가 고파요.</p>`,
                    },
                ],
            },
            {
                title: `Exceptions`,
                rules: [
                    {
                        title: `Rule 1`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">ㄷ ⇨ ㄹ</p>
                        <p class="example">듣다 ⇨ 들…</p>
                        <p class="exception">닫다 ⇨ 닫아요</p>
                        <p class="exception">받다 ⇨ 받아요</p>
                        <p class="exception">믿다 ⇨ 믿어요</p>

                        <p class="topic">ㅂ ⇨ 우</p>
                        <p class="example">줍다 ⇨ 주워…</p>
                        <p class="exception">돕다 ⇨ 도와요</p>
                        <p class="exception">입다 ⇨ 입어요</p>
                        <p class="exception">좁다 ⇨ 좁아요</p>
                        <p class="exception">잡다 ⇨ 잡아요</p>`,
                    },
                    {
                        title: `Rule 2`,
                        tags: [`Easy Korean 4`],
                        content: `<p>Same as <a href="#exceptionRule1">exception rule 1</a>, and:</p>

                        <p class="topic">ㄹ ⇨ delete, but use as if vowel, not consonant</p>
                        <p class="example">살다 ⇨ 삽시다</p>`,
                    },
                    {
                        title: `Rule 3`,
                        tags: [`Easy Korean 4`],
                        content: `<p>Same as <a href="#exceptionRule1">exception rule 1</a>, and:</p>
                        <p class="topic">ㄹ ⇨ ㄹ, but use as if vowel, not consonant</p>
                        <p class="example">살다 ⇨ 살면</p>`,
                    },
                    {
                        title: `Polite verbs`,
                        tags: [`Easy Korean 4`],
                        content: `<p class="topic">먹다 ⇨ 드시다 / 잡수시다</p>
                        <p class="topic">마시다 ⇨ 드시다 / 잡수시다</p>
                        <p class="topic">자다 ⇨ 주무시다</p>
                        <p class="topic">말하다 ⇨ 말씀하시다</p>
                        <p class="topic">주다 ⇨ 드리다</p>
                        <p class="topic">있다 ⇨ 계시다</p>`,
                    },
                ],
            },
        ];
    }
}
